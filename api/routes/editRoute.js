const { getBooking, updateBooking } = require("../controllers/editController");
const express = require("express");
const router = express.Router();

router.get("/getBooking", getBooking);
router.post("/updateBooking", updateBooking);

module.exports = router;