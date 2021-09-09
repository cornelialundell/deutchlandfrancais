const mongoose = require("mongoose");
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");
const nodemailerSmtpTransport = require("nodemailer-smtp-transport");
const { deleteOne } = require("../models/Booking");
const POSSIBLE_TIMES = [18, 21];
const MAXIMUM_PER_TABLE = 6;
const dotenv = require("dotenv");

const transport = nodemailer.createTransport(
  nodemailerSmtpTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  })
);


const getBookings = async (req, res) => {
  const chosenDate = req.query.date
  const bookings = await Booking.find({
    date: chosenDate
  });

  res.send(bookings)
}

const checkAvailability = async (req, res) => {
  const isAvailableArray = [];
  const chosenDate = req.body.booking.date;
  const newPeople = req.body.booking.guests;

  if (newPeople > 18) {
    return res.status(404).json({ message: "För många personer" });
  }
  if (!chosenDate | !newPeople) {
    return res.status(404).json({ message: "fyll i alla fälten" });
  }

  // CHECK HOW MANY TABLE IS NEEDED
  let table = Math.ceil(newPeople / MAXIMUM_PER_TABLE);
  let currentTime = 18;
  // CHECK IF TABLE IS AVAILABLE
  for (time in POSSIBLE_TIMES) {
    if (time == 1) {
      currentTime = 21;
    }

    const bookings = await Booking.find({
      date: chosenDate,
      time: currentTime,
    });

    let totalTables = 0;
    bookings.map(function (booking) {
      let bookedTables = Math.ceil(booking.guests / MAXIMUM_PER_TABLE);
      totalTables = totalTables + bookedTables;
    });

    // TABLE IS AVAILABLE OR NOT
    let isAvailable = false;
    if (totalTables + table <= 15) {
      isAvailable = true;
    } else {
      isAvailable = false;
    }
    isAvailableArray.push(isAvailable);
  }

  res.send(isAvailableArray);
};

const addBooking = async (req, res) => {
  const { date, guests, time, name, email, phones } = req.body.booking;
  const confirmation = Math.floor(Math.random() * 1000000);

  const newBooking = await new Booking({
    date: date,
    guests: guests,
    time: time,
    name: name,
    email: email,
    phones: phones,
    confirmation: confirmation,
  }).save();


  await transport.sendMail({
    from: "fusionrestaurant.info@gmail.com",
    to: email,
    subject: "Bokningsbekräftelse",

    html: `<h1> Tack för din bokning! </h1>
  <h3> Du är välkommen kl ${time}:00 ${date}. <br> Ditt ordernummer är ${confirmation}`,
  });

  res.status(200).send()
};

const cancelBooking = async (req, res) => {
  try {
  const confirmation = req.body.confirmationNumber;
  await Booking.deleteOne({confirmation: confirmation});


  } catch (error) {
    console.log("error");
  }
  
  res.status(200).send()
}



module.exports = { addBooking, checkAvailability, getBookings, cancelBooking };
