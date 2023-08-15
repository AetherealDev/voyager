const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/create', async (req, res) => {
  res.render('create');
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

module.exports = router;
