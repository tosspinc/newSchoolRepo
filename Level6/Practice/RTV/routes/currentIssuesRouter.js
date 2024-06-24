const express = require('express');
const currentIssuesRouter = express.Router();
const Issues = require('../models/issue.js');
const UserName = require('../models/user.js');
const Comment = require('../models/comment.js')

//Get all issues
currentIssuesRouter.get('/', async (req, res, next) => {
    try {
        const allIssues = await Issues.find().populate('author').populate('comments').exec()
        return res.status(200).send(allIssues)
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error"})
        return next(error)
    }
})

//get one issue
currentIssuesRouter.get('/:issueId', async (req, res, next) =>{
    try {
        const issue = await Issues.findById(req.params.issueId).populate('author').populate('comments')
        if (!issue) {
            return res.status(404).send({ message: 'No current issue found.'})
        } 
        return res.status(200).send(issue)
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' })
        return next(error)
    }
})

//get one issue by specific user
currentIssuesRouter.get('/user/:userId', async (req, res, next) => {
    try {
        const userIssues = await Issues.find( { author: req.params.userId }).populate('author').populate('comments')
        if (!userIssues.length) {
            return res.status(404).send({ message: "No issues found for this user"})
        }
        return res.status(200).send(userIssues)
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

//update an issue
currentIssuesRouter.put('/issueId', async (req, res, next) => {
    try {
        const { title, description, author } = req.body

        //updates issue
        const updatedIssue = await Issues.findByIdAndUpdate(
            req.params.issueId,
            { title, description, author },
            {new : true}
        ).populate('author').populate('comments')

        if (!updatedIssue) {
            return res.status(404).send({ message: 'Issue not found.'})
        }

        return res.status(200).send(updatedIssue)
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' })
        return next(error)
    }
})

currentIssuesRouter.delete('/:issueId', async (req, res, next) => {
    try {
        const deletedIssue = await Issues.findByIdAndDelete(req.params.issueId)

        if (!deletedIssue) {
            return res.status(404).send({ message: 'No current issues found.'})
        }

        return res.status(200).send({ message: `Issue titled ${deletedIssue.title} has been deleted successfully.`})
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error'})
        return next(error)
    }
})

module.exports = currentIssuesRouter