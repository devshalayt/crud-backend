const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('todos',TodoSchema)