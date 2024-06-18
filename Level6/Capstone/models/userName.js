const mongoose = require('mongoose')
const Schema = mongoose.Schema

//author schema or blueprint
const userNameSchema = new Schema ({
    userName: {
        type: String,
        require: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    memberSince: {
        type: Date,
        default: Date.now,
        require: false,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        trim: true
    }
})

module.exports = mongoose.model("UserName", userNameSchema)