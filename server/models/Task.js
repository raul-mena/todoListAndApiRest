
'use strict';
const mongoose = require('../config/database'),
      Schema = mongoose.Schema;

const Task = mongoose.model('Task', new Schema({
    name: {type: String, unique: true},
    description: {type: String},
    date: {type: String},
    status: {type: Number, default: 1},
    userId: {type: String, required: true}
}));

module.exports = Task;