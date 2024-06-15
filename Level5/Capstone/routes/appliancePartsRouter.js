express = require('express')
const appliancePartsRouter = express.Router()
const ApplianceParts = require('../models/applianceParts')
//const { findById, findByIdAndDelete } = require('../models/todo')



//get all
appliancePartsRouter.get("/", async (req, res, next) => {
    try {
        const allApplianceParts = await ApplianceParts.find()
        return res.status(200).send(allApplianceParts)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


//post to mongoose
appliancePartsRouter.post('/', async (req, res, next) => {
    try {
        const newApplianceParts = new ApplianceParts(req.body)
        const savedApplianceParts = await newApplianceParts.save()
        return res.status(201).send(savedApplianceParts)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//put - edit request
appliancePartsRouter.put('/:id', async (req, res, next) => {
    try {
    const updatedAppliancePart = await ApplianceParts.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true} 
    )
    return res.status(200).send(updatedAppliancePart)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//delete
appliancePartsRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedAppliancePart = await ApplianceParts.findByIdAndDelete(req.params.id)
        return res.status(200).send(`You have deleted ${deletedAppliancePart.title}`)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})

//updating the customer likes for an appliance part
appliancePartsRouter.put("/likes/:appliancePartID", async (req, res, next) => {
    try {
        const updatedAppliancePart = await ApplianceParts.findByIdAndUpdate(
            req.params.appliancePartID,
            { $inc: { likes: 1} },
            { new: true},
        )
        if (!updatedAppliancePart) {
            return res.status(404).send( { message: 'Appliance part not found' })
        }
        return res.status(200).send(updatedAppliancePart)
    } catch (error) {
        res.status(500)
        return next(error)
    }
})


module.exports = appliancePartsRouter