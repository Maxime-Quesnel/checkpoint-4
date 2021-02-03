const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const mainApi = require('./routes/index');
const passport = require('passport');

// Dotenv config
require('dotenv').config();

const app = express();

// Express middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// multer stock images
app.use('/public', express.static('public'));

// DB Config
const db = require('./config/keys').mongoConnect;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

// Route api
app.use('/api', mainApi);

// listen server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
