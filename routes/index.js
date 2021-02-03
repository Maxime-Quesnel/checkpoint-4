const router = require('express').Router();
const users = require('./api/users.routes');
const upload = require('./api/upload.routes');

// Routes
router.use('/users', users);
router.use('/upload', upload);

module.exports = router;
