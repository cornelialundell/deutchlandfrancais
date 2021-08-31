const { addBooking, checkAvailability } = require("../controllers/bookingController");
const express = require("express");
const router = express.Router();

router.post('/booking', checkAvailability)

router.post("/addBooking", addBooking);

module.exports = router;