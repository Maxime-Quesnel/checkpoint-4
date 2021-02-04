const router = require('express').Router();
const multer = require('multer');

const Image = require('../../models/Image');

router.post('/new', (req, res) => {
  const { name, alt } = req.body;
  Image.findOne({ name, alt }, (err, result) => {
    if (err) {
      res.status(500).send({ error: "erreur ajout d'image" });
    } else {
      const newImage = new Image({
        name,
        alt
      });
      newImage.save();
      res.status(200).send('image ajouté avec succes');
    }
  });
});

router.get('/all', (req, res) => {
  Image.find({}, (err, result) => {
    if (err) {
      res.status(300).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

router.post('/', (req, res) => {
  const storage = multer.diskStorage({
    // destination stock image
    destination: (_, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (_, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });

  const upload = multer({ storage }).single('file');

  upload(req, res, err => {
    if (err) {
      res
        .status(500)
        .json({ errorMessage: "Votre fichier n'est pas au bon format" });
    } else {
      res.status(201).json({ filename: req.file.filename });
    }
  });
});

module.exports = router;
