require('dotenv').config();

module.exports = {
  mongoConnect: process.env.MONGO_CONNECT,
  secretOrKey: process.env.SECRET_KEY
};
