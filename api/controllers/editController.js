const mongoose = require("mongoose");
const Booking = require("../models/Booking");

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
  //CHECK IF AVAILABLE
  let table = Math.ceil(guests / 6);

  const bookings = await Booking.find({
    date: date,
    time: time,
  });

  let totalTables = 0;
  bookings.map(function (booking) {
    let bookedTables = Math.ceil(booking.guests / 6);
    totalTables = totalTables + bookedTables;
  });

  // TABLE IS AVAILABLE OR NOT
  let isAvailable = false;
  if (totalTables + table <= 15) {
    isAvailable = true;
  } else {
    isAvailable = false;
  }

  if (isAvailable == false) {
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
