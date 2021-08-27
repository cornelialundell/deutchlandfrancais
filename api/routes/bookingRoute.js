const { addBooking, checkAvailability } = require("../controllers/bookingController");
const express = require("express");
const router = express.Router();

router.get('/booking', checkAvailability)

router.post("/booking", addBooking);

module.exports = router;