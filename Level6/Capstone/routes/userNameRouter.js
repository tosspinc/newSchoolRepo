express = require('express')
const userNameRouter = express.Router()
const UserName = require('../models/userName')
const jwt = require('jsonwebtoken')

//get all users
userNameRouter.get("/", async (req, res, next) => {
    try {
        const allUserNames = await UserName.find()
        return res.status(200).send(allUserNames)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//creates a new user in mongoose
userNameRouter.post('/signup', async (req, res, next) => {
    try {
        const {userName, password} = req.body

        //checks if username is already in use
        const existingUser = await UserName.findOne({ userName })
        if (existingUser) {
            return res.status(403).send({ error: "That username is already being used." })
        }

        const newUserName = new UserName({ userName, password })
        const savedUserName = await newUserName.save()

        //generate jwt token
        const token = jwt.sign({ userName: savedUserName.userName }, process.env.SECRET)

        return res.status(201).send({ user: savedUserName, token })
    } catch (error) {
        res.status(500)
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
    return res.status(200).send(updatedUserName)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//delete a user
userNameRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedUserName = await UserName.findByIdAndDelete(req.params.id)
        return res.status(200).send(`You have deleted ${deletedUserName.userName}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

module.exports = userNameRouter