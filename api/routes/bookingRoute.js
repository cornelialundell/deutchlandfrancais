const { addBooking, checkAvailability, getBookings } = require("../controllers/bookingController");
const express = require("express");
const router = express.Router();

router.get("/getBookings", getBookings);
router.post('/booking', checkAvailability)

router.post("/confirmBooking", addBooking);

module.exports = router;