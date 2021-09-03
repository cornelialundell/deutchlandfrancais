const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const bookingRoute= require("./routes/bookingRoute")
const editRoute= require("./routes/editRoute")

const app = express();
const port = 9000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))


app.use(bookingRoute)
app.use(editRoute)
mongoose.set("useFindAndModify", false);


mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    app.listen(port, () => {
      console.log("App is running");
    });
  }
);


