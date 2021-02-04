const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema Image
const ImageSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  alt: {
    type: String,
    require: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Image = mongoose.model('images', ImageSchema);
