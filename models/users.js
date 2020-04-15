//_____________
// DEPENDANCIES
//_____________
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//_____________
// SCHEMA
//_____________
const userSchema = Schema({
  username: String,
  password: String
})

const User = mongoose.model('User', userSchema);

module.exports = User;
