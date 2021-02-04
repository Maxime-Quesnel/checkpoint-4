const router = require('express').Router();

const Testimonial = require('../../models/Testimonial');

router.post('/add', (req, res) => {
  const { username, contentText, location } = req.body;
  Testimonial.findOne({ username, contentText, location }, (err, result) => {
    if (err) {
      res.status(500).send({ error: 'erreur creating post' });
    } else {
      const newTestimonial = new Testimonial({
        username,
        contentText,
        location
      });
      newTestimonial.save();
      res.status(200).send('post ajouté avec succes');
    }
  });
});

router.get('/all', (_, res) => {
  Testimonial.find({}, (err, result) => {
    if (err) {
      res.status(300).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

module.exports = router;
