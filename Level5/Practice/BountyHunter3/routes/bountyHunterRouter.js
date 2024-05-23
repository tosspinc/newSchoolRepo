const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bountyHunterRouter = express.Router();

const bounties = [
    {
        fName: "John",
        lName: "Smith",
        living: true,
        bountyAmt: 10000,
        type: "sith",
        _id: uuidv4()
    },
    {
        fName: "Jane",
        lName: "Doe",
        living: true,
        bountyAmt: 1000,
        type: "jedi",
        _id: uuidv4()
    },
    {
        fName: "Luke",
        lName: "Skywalker",
        living: true,
        bountyAmt: 100000,
        type: "jedi",
        _id: uuidv4()
    },
    {
        fName: "Sandra",
        lName: "Bullock",
        living: true,
        bountyAmt: 250000,
        type: "sith",
        _id: uuidv4()
    }
]

// Get all and create new
bountyHunterRouter.route("/")
    .get((req, res) => {
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounties = req.body;
        newBounties._id = uuidv4();
        bounties.push(newBounty);
        res.send(newBounty);
    });

//delete a data listing
bountyHunterRouter.delete("/:bountiesId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountiesIndex = bounties.findIndex(bounties => bounties._id === bountyId )
    
    if (bountiesIndex >= 0) {
        bounties.splice(bountiesIndex, 1)
        res.send("Successfully deleted a bounty!")
    } else {
        res.status(404).send("Bounty not found!")
    }
})


module.exports = bountyHunterRouter; 