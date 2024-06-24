const express = require('express');
const currentIssuesRouter = express.Router();
const Issues = require('../models/issue.js');
const UserName = require('../models/user.js');
const Comment = require('../models/comments.js')

//Get all issues
currentIssuesRouter.get('/', (req, res, next) => {
    try {
        const allIssues = Issues.find()
        return res.status(200).send(allIssues)
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error"})
        return next(error)
    }
})

//get one issue
currentIssuesRouter.get('/:issueId', async (req, res, next) =>{
    try {
        const issue = await issue.findById(req.params.issueId).populate('comments')
        if (!issue) {
            return res.status(404).send({ message: 'No issue found.'})
        } 
        return res.status(200).send(issue)
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' })
        return next(error)
    }
})

//get one issue by specific user
currentIssuesRouter.get('/comments/user/:userId', async (req, res, next) => {
    try {
        const userComments = await Comment.find( { author: req.params.userId }).populate('author')
        if (!userComments.length) {
            return res.status(404).send({ message: "No comments found for this user"})
        }
        return res.status(200).send(userComments)
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' })
        return next(error)
    }
})

//post a new current issue.
currentIssuesRouter.post('/', async (req, res, next) => {
    try {
        const { title, description, author } = req.body

        //find author in database
        const user = await UserName.findById(author)
        if (!user) {
            return res.status(404).send({ message: 'Author not found' })
        }

        //create and save new issue
        const newIssue = new Issues({ title, description, author: user })
        const savedIssue = await newIssue.save()
    
        return res.status(201).send(savedIssue)

    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' })
        return next(error)
    }
})

module.exports = currentIssuesRouter