const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema Testimonial
const testimonialSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  contentText: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Testimonial = mongoose.model('testimonial', testimonialSchema);
