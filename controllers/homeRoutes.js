const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/create', async (req, res) => {
  res.render('create');
});

module.exports = router;
