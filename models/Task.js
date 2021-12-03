const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide dat"]
    },
    completed:Boolean
})

module.exports = mongoose.model('Task', taskSchema)