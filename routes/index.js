const router = require('express').Router();
const users = require('./api/users.routes');
const upload = require('./api/upload.routes');
const testimonial = require('./api/testimonial.routes');

// Routes
router.use('/users', users);
router.use('/upload', upload);
router.use('/testimonial', testimonial);

module.exports = router;
