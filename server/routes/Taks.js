'use strict'

const express = require('express');
const Task = express.Router();
const CosurseController = require('../controllers/TaskController');
const auth = require('../middleware/Auth');

Task.get('/tasks/:id', auth.checkToken, CosurseController.getTasks);
Task.get('/task/:id', auth.checkToken, CosurseController.getTaskById);
Task.put('/task/:id', auth.checkToken, CosurseController.updateTaskById);
Task.post('/tasks', auth.checkToken, CosurseController.save);

module.exports = Task