const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const session = require('express-session');
const db = mongoose.connection;
require('dotenv').config();

const PORT = process.env.PORT || 5000;
//_____________
// DATABASE
//_____________
const MONGODB_URI = process.env.MONGODB_URI;
//Fix Deprecation warnings with below
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Connect MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});

//Error / Success
db.on('error', (err) => console.log(err.message + ' is MongoD not running?'));
db.on('connected', () => console.log('Mongo Connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('Mongo Disconnected'));

//_____________
// MIDDLEWARE
//_____________

//use public folder for static assets
app.use(express.static('public'));

//populates req.body with parsed info from forms
//---if not data from forms, it will return an empty object {}

//doesn't alllow nested objects in query strings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//use session
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

//__________
// ROUTES
//__________

//Main GET Route for index.html
app.get('/', (req, res) => {
  res.render('index.html', {
    currentUser: req.session.currentUser
  })
})

//_______________
// CONTROLLERS
//_______________
const userController = require('./controllers/users.js');
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

//_______________
// LISTENER
//_______________
app.listen(PORT, () => console.log('Listening on port: ', PORT));
