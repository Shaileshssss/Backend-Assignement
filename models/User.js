
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: String, default: 'default.jpg' },
  bio: { type: String },
  phone: { type: String },
  isPublic: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
