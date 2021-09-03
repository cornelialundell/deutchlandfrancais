const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  numberOfPeople: {
    type: Number,
  },
  time: {
    type: Number
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  phones: {
    type: String
  },
  confirmation: {
    type: Number
  }

});

const Booking = mongoose.model("booking", bookingSchema);
module.exports = Booking;
