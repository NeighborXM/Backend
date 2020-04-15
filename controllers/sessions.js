//_____________
// DEPENDANCIES
//_____________
const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');
const bcrypt = require('bcrypt');

//_____________
// ROUTES
//_____________

//GET route
sessions.get('/', (req, res) => {
  console.log("Sessions.get Route is working");
})

//POST route for sessions
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    console.log(req.body);
    //series of checks for username and password matchup
    if (error) {
      console.log(error);
      res.send('The database encountered some kind of error.');
    } else if (!foundUser) {
      //if the user is found but is considered undefined or null
      alert("Invalid Username");
    } else {
      //if the user is found (matched up the username), run check for password
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        //add user to session
        req.session.currentUser = foundUser;
        res.redirect('/');
      } else {
        alert("Invalid Password for User")
      }
    }
  })
})

//DELETE route for sessions
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    console.log("The sessions delete route is working");
  })
})

module.exports = sessions;
