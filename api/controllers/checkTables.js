const Booking = require("../models/Booking");
const MAXIMUM_PER_TABLE = 6;
const MAXIMUM_TABLES = 15;

const checkTables = async (POSSIBLE_TIMES, newPeople, chosenDate) => {
    let isAvailableArray = [];
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
    if (totalTables + table <= MAXIMUM_TABLES) {
      isAvailable = true;
    } else {
      isAvailable = false;
    }
    isAvailableArray.push(isAvailable);
  } 

  return isAvailableArray
}

module.exports = { checkTables };