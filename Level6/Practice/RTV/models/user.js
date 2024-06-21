const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    memberSince: {
        type: Date,
        default: Date.now,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        trim: true
    }
})

module.exports = mongoose.model('User', userSchema)