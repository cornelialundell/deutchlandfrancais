const { addBooking, checkAvailability, getBookings, cancelBooking } = require("../controllers/bookingController");
const express = require("express");
const router = express.Router();

router.get("/getBookings", getBookings);
router.post('/booking', checkAvailability)

router.post("/confirmBooking", addBooking);
router.post("/cancelBooking", cancelBooking);

module.exports = router;