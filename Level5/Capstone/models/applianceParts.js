const mongoose = require('mongoose')
const Schema = mongoose.Schema

//appliance parts schema or blueprint
const appliancePartsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required.'],
        trim: true
    },
    partnumber: {
        type: String,
        required: [true, 'Part number is required'],
        trim: true
    },
    manufacturer: {
        type: String,
        required: [true, 'Manufacturers name is required'],
        trim: true
    },
    likes: {
        type: Number,
        default: 0,
        trim: true
    },
    description: {
        type: String,
        required: [true, 'A brief description of the appliance part is required.'],
        trim: true
    },
    imageUrl: {
        type: String,
        required: [false, "an image of appliance part is required"],
        trim: false
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        trim: true
    }
})

module.exports = mongoose.model("ApplianceParts", appliancePartsSchema)