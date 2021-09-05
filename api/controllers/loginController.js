const mongoose = require("mongoose");
const Admin = require("../models/Admin");
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Fyll i båda fälten!" });
  }

  const correctAdmin = await Admin.findOne({ username: username, password: password });

  if (!correctAdmin) {
    return res
      .status(400)
      .json({ message: "Användarnamnet eller lösenordet är felaktigt." });
  }

  const token = await jwt.sign(
    {
        user: correctAdmin._id,
    },
    process.env.SECRET_KEY
);
console.log(token)
res.cookie("token", token, {httpOnly: true}).send(token);
};

module.exports = { login };
