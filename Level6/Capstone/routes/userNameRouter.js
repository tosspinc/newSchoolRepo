const express = require('express')
const userNameRouter = express.Router()
const UserName = require('../models/userName')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

//get all users
userNameRouter.get("/", async (req, res, next) => {
    try {
        const allUserNames = await UserName.find()
        return res.status(200).send(allUserNames)
    } catch (error) {
        console.error('Error fetching all users.', error)
        res.status(500).send({ error: "Internal Server Error"})
        return next(error)
    }
})

//creates a new user in mongoose
userNameRouter.post('/signup', async (req, res, next) => {
    try {
        const {username, password} = req.body

        //checks if username is already in use
        const existingUser = await UserName.findOne({ userName: username.toLowerCase() })
        if (existingUser) {
            return res.status(403).send({ error: "That username is already being used." })
        }

        //hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUserName = new UserName({ userNme: username.toLowerCase(), password: hashedPassword })
        const savedUserName = await newUserName.save()

        //generate jwt token
        const token = jwt.sign({ userName: savedUserName.userName }, process.env.SECRET)

        return res.status(201).send({ user: savedUserName.withoutPassword(), token })
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error"})
        return next(error)
    }
})

//for when a user logs in
userNameRouter.post('/login', async (req, res, next) => {
    try {
        const { username, password} = req.body

        //checks if they already exists in database.
        const user = await UserName.findOne({ userName: username })
        if(!user) {
            return res.status(403).send({ error: "No User with your username exists. Please signup." })
        }

        //checks if password matches.
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(403).send({ error: "Incorrect username or password." })
        }

        //generate jwt token
        const token = jwt.sign({ id: user._id, userName: user.userName }, process.env.SECRET, { expiresIn: '1hr'})

        return res.status(200).send({ message: "Logged in successfully.", user: user.withoutPassword(), token })
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error"})
        return next(error)
    }
})

//put - updates user
userNameRouter.put('/:id', async (req, res, next) => {
    try {
    const updatedUserName = await UserName.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true} 
    )
    return res.status(200).send(updatedUserName.withoutPassword())
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error"})
        return next(error)
    }
})

//delete a user
userNameRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedUserName = await UserName.findByIdAndDelete(req.params.id)
        return res.status(200).send(`User ${deletedUserName.userName} deleted successfully.`)
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error"})
        return next(error)
    }
})

module.exports = userNameRouter