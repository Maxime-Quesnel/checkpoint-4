const router = require('express').Router();
const users = require('./api/users.routes');

// Routes
router.use('/users', users);

module.exports = router;
