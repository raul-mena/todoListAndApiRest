'use strict'

const express = require('express');
const User = express.Router();
const CosurseController = require('../controllers/UserController');

User.get('/users', CosurseController.getUser);
User.post('/users', CosurseController.save);
User.post('/users/auth', CosurseController.login);

module.exports = User