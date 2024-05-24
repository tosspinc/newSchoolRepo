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
];

// Get all and create new
bountyHunterRouter.route("/")
    .get((req, res) => {
        console.log(req.body);
        res.send(bounties);
    })
    .post((req, res) => {
        const newBounty = req.body;
        newBounty._id = uuidv4();
        console.log(newBounty);
        bounties.push(newBounty);
        res.send(newBounty);
    });

// Delete a data listing
bountyHunterRouter.delete("/:bountiesId", (req, res) => {
    const bountyId = req.params.bountiesId;
    console.log("Bounty Id to delete:", bountyId);  // Logging the ID to delete

    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);

    if (bountyIndex >= 0) {
        console.log("Bounty found at index:", bountyIndex);  // Logging index of found bounty
        bounties.splice(bountyIndex, 1);
        res.send("Successfully deleted a bounty!");
    } else {
        console.log("Bounty not found for ID:", bountyId);  // Logging not found scenario
        res.status(404).send("Bounty not found!");
    }
});

// Update one listing 
bountyHunterRouter.put("/:bountiesId", (req, res) => {
    const bountiesId = req.params.bountiesId;
    const updateBounty = req.body;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountiesId);

    if (bountyIndex === -1) {
        return res.status(404).send("Bounty not found!");
    }

    const updatedBounty = { ...bounties[bountyIndex], ...updateBounty };
    bounties[bountyIndex] = updatedBounty;

    res.send(updatedBounty);
});

module.exports = bountyHunterRouter;
