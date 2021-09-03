const { getBooking } = require("../controllers/editController");
const express = require("express");
const router = express.Router();

router.get("/getBooking", getBooking);

module.exports = router;