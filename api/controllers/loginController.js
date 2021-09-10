const mongoose = require("mongoose");
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

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

 
res.status(201).send();
};

module.exports = { login };
