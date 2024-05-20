const express = require('express');
const {v4 : uuidv4} = require("uuid");
const bountyHunterRouter = express.Router();


const bountyHunter = [
    { 
        fName: "John", 
        lName: "Smith", 
        living: "true",
        bountyAmt: 10000,
        type: "sith",
        _id: uuidv4()
    },
    { 
        fName: "Jane", 
        lName: "Doe", 
        living: "true",
        bountyAmt: 1000,
        type: "jedi",
        _id: uuidv4()
    },
    { 
        fName: "Luke", 
        lName: "Skywalker", 
        living: "true",
        bountyAmt: 100000,
        type: "jedi",
        _id: uuidv4()
    },
    { 
        fName: "Sandra", 
        lName: "Bullock", 
        living: "true",
        bountyAmt: 250000,
        type: "sith",
        _id: uuidv4()
    }
]

//routes
bountyHunterRouter.route("/")
    .get((req, res) => {
        res.send(bountyHunter)
    })
    .post((req, res) => {
        const newBountyHunter = req.body
        newBountyHunter._id = uuidv4()
        bountyHunter.push(newBountyHunter)
        res.send(`Successfully added ${newBountyHunter} to the database.`)
    })

module.exports = bountyHunterRouter
    