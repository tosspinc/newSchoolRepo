const express = require('express');
const authRouter = express.Router();
const UserName = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

//gets all users
authRouter.get('/', async (req, res, next) => {
    try {
        const allUsers = await UserName.find()
        return res.status(200).send(allUsers)
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error'})
        return next(error)
    }
})

authRouter.post('/signup', async (req, res, next) => {
    try {
        const { username, password} = req.body
        
        //check if user is already in database.
        const existingUser = await UserName.findOne({ username })
        if (existingUser) {
            return res.status(403).send({ error: 'That username is already being used.' })
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUserName = new UserName({ username, password: hashedPassword })
        const savedUserName = await newUserName.save()
        
        //generate jwt token.
        const token = jwt.sign({ id: savedUserName._id, username: savedUserName.username }, process.env.SECRET, { expiresIn: '1hr'})

        return res.status(201).send({ user: {id: savedUserName._id, username: savedUserName.username}, token })
        
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' })
        return next(error)
    }
})

authRouter.put('/:id', async (req, res, next) => {
    try {
        const updateData = req.body
        
        //if updating password
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10)
        }

        const updatedUserName = await UserName.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        )

        if (!updatedUserName) {
            return res.status(404).send({ error: "User not found" })
        }

        return res.status(200).send(updatedUserName)
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error'})
        return next(error)
    }
})

authRouter.delete('/:id', async (req, res, next) => {
    try {
        const deletedUserName = await UserName.findByIdAndDelete(req.params.id) 
        
        if (!deletedUserName) {
            return res.status(404).send({ error: "User not found." })
        }
        return res.status(200).send(`User ${deletedUserName.username} deleted successfully.`)
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' })
        return next(error)
    }
})

module.exports = authRouter