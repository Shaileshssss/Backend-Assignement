
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
// Other authentication routes will be here

module.exports = router;
