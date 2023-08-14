const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/register', async (req, res) => {
  res.render('register');
});

router.get('/create', async (req, res) => {
  res.render('create');
});

module.exports = router;
