const router = require('express').Router();
const { User, Post} = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      req.session.userID = userData.id;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = await User.findByPk(userId, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post, as: 'posts' }] // Assuming your association is named 'posts'
    });

    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userID = userData.id; // Set the userID after saving the session

      console.log('File: user-routes.js ~ line 45 ~ req.session.save ~ req.session.cookie', req.session.cookie);
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;