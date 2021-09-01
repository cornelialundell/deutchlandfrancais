const mongoose = require("mongoose");
const Booking = require("../models/Booking");
const POSSIBLE_TIMES = [18, 21];

const checkAvailability = async (req, res) => {
  const isAvailableArray = [];
  const chosenDate = req.body.bookedDay;
  const newPeople = req.body.bookedPeople;

  if (!chosenDate) {
    return res.status(404).json({ message: "fyll i alla fälten" });
  }

  // CHECK HOW MANY TABLE IS NEEDED
  let table = Math.ceil(newPeople / 6);
  let currentTime = 18;
  // CHECK IF TABLE IS AVAILABLE
  for (time in POSSIBLE_TIMES) {
    if (time == 1) {
      currentTime = 21;
    }
    console.log(currentTime);

    const bookings = await Booking.find({
      date: chosenDate,
      time: currentTime,
    });

    let totalTables = 0; 
    bookings.map(function (booking) {
      let bookedTables = Math.ceil(booking.numberOfPeople / 6);
      totalTables = totalTables + bookedTables;
    });

    // TABLE IS AVAILABLE OR NOT
    let isAvailable = false;
    if (totalTables + table <= 15) {
      isAvailable = true;
    } else {
      isAvailable = false;
    }
    console.log(isAvailable);
    isAvailableArray.push(isAvailable);
  }
  // const bookings = await Booking.find({ date: chosenDate, });

  // let totalTables = 0;
  // bookings.map(function (booking) {
  //   let bookedTables = Math.ceil(booking.numberOfPeople / 6);
  //   totalTables = totalTables + bookedTables;
  // });

  // // TABLE IS AVAILABLE OR NOT
  // let isAvailable = false;
  // if (totalTables + table <= 15) {
  //    isAvailable = true;
  // } else {
  //    isAvailable = false;
  // }

  res.send(isAvailableArray);
  
};

const addBooking = async (req, res) => {

  console.log(req.body)
  const {date, numberOfPeople, time, name, email, phones} = req.body.booking;
  console.log(req.body.booking);
  

  // if (!chosenName) {
  //   return res.status(404).json({ message: "fyll i alla fälten" });
  // }

 const newBooking = await new Booking({
   date: date,
   numberOfPeople: numberOfPeople,
   time: time,
   name: name,
   email: email,
   phones: phones
    
  }).save();

  // await newBooking.save();
};

module.exports = { addBooking, checkAvailability };
