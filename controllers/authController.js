
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password: await bcrypt.hash(password, 10) });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.secretKey);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Other authentication methods: login, social login, logout
