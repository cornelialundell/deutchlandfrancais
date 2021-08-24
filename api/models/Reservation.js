const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    numberOfPeople: {
        type: Number,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    }
})

const Reservation = mongoose.model('reservation', reservationSchema);

module.exports = Reservation;