const mongoose = require("mongoose");
const Booking = require("../models/Booking");
const MAXIMUM_PER_TABLE = 6;
const MAXIMUM_TABLES = 15;
const { checkTables } = require("../controllers/checkTables");

const getBooking = async (req, res) => {
  const confirmation = req.query.confirmation;
  let booking = await Booking.find({
    confirmation: confirmation,
  });
  booking = booking[0];
  res.send(booking);
};

const updateBooking = async (req, res) => {
  const {
    date,
    guests,
    time,
    name,
    email,
    phones,
    confirmation,
  } = req.body.booking;
  const id = req.body.booking._id;
  const POSSIBLE_TIMES = [time];

  let isAvailableArray = await checkTables(POSSIBLE_TIMES, guests, date)

  if (isAvailableArray[0] == false) {
    return res.status(400).json({ message: "Bokning tyvärr inte ledigt" });
  }

  await Booking.findByIdAndUpdate(id, {
    date: date,
    guests: guests,
    time: time,
  });
  res.status(200).send();
};

module.exports = { getBooking, updateBooking };
