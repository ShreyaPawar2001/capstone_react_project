// This file will handle the authentication routes such as signup and login.
const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

// Sign up route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

module.exports = router;
