const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  // name: {
  //   type: String,
  //   required: true,
  //   default: 'zs'
  // },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: Number,
    required: true
  },
  // avatar: {
  //   type: String
  // },
  // identity: {
  //   type: String,
  //   required: true,
  //   default: "andmin"
  // },

});

module.exports = User = mongoose.model('users', UserSchema);