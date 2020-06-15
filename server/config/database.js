'use strict';
const mongoose = require('mongoose');
const config = require('./global');

mongoose.connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
  });
module.exports = mongoose;