const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Question = mongoose.model('question', questionSchema);

module.exports = Question;