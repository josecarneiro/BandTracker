'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String
  },
  userType: {
    type: String,
    required: true,
    enum: ['Fan', 'Artist']
    // add default: "Fan" ?
  },
  profilePicture: {
    type: String,
    required: [true, 'A profile picture is required.']
  }
});

module.exports = mongoose.model('User', schema);
