const mongoose = require("mongoose");
const Booking = require("../models/Booking");

const getBooking = async (req, res) => {
  const confirmation = req.query.confirmation;
  let booking = await Booking.find({
    confirmation: confirmation,
  });
booking = booking[0]
  res.send(booking);
};

module.exports = { getBooking };
