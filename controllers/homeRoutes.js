const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/post', async (req, res) => {
  res.render('post');
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});

router.get('/register', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

module.exports = router;
