const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

// model User
const User = require('../../models/User');

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "L'adresse email existe déjà" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (_, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.status(200).json(user._id);
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ emailnotfound: "L'adresse email n'existe pas" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          _id: user._id
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 864000 // 10 days in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Mot de passe incorrect' });
      }
    });
  });
});

router.get('/', (req, res) => {
  User.findOne({}, (err, user) => {
    if (err) {
      res.status(300).send({ message: 'error get user' });
    } else {
      const result = {
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        email: user.email
      };
      res.status(200).send(result);
    }
  });
});

module.exports = router;
