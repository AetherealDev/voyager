const router = require('express').Router();
const { Post } = require('../../models');
const multer = require('multer');
const short = require('short-uuid');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploaded_images/');
  },
  filename: function(req, file, cb) {
    let extArray = file.mimetype.split('/');
    let extension = extArray[extArray.length - 1];
    cb(null, short.uuid().toString() + '.' + extension);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Cannot accept file with that extension. Please only upload jpeg and png files.'), false);
  }
};

const upload = multer({ 
  storage: storage, 
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
  //   const postData = await Post.create({
  //     userId: ,
  //     locationId: ,
  //     title: req.body.title,
  //     content: req.body.content,
  //     image: req.file.path
  //   });

  //   res.status(200).json(postData);
  console.log('Location: ' + req.body.place_id,
              'Title: ' + req.body.title, 
              'Content: ' + req.body.content,
              'Image: ' + req.file.path);
  res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;