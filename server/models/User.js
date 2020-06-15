
'use strict';
const mongoose = require('../config/database'),
      Schema = mongoose.Schema;

const User = mongoose.model('User', new Schema({
    username: {type: String, unique: true},
    password: {type: String},
}));

module.exports = User;