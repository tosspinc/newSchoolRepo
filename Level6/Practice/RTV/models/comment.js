const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = newSchema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        trim: true
    },
    issue: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Comment', commentSchema)