
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

// get mehtod
router.get('/profile', authMiddleware.verifyToken, profileController.getProfile);
// Other profile routes will be here

module.exports = router;
