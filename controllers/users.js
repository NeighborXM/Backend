//_____________
// DEPENDANCIES
//_____________
const express = require('express');
const users = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//_____________
// ROUTES
//_____________

//GET route
users.get('/', (req, res) => {
  console.log("The users get route is working");
})

//POST route
users.post('/', (req, res) => {
  //overwrite the user password with a hashed password, than pass it into database.
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  console.log(req.body);
  User.create(req.body, (error, createdUser) => {
    if (error){
      console.log(error);
    } else {
      console.log(createdUser);
      res.redirect('/')
    }
  })
})

module.exports = users;
