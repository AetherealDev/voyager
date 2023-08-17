const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.userID, {
      include: [
        {
          model: Post,
        },
      ],
    });

    const user = userData.get({ plain: true });
    res.render('dashboard', {
      user,
      loggedIn: req.session.loggedIn,
    });
  } catch(err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    if(!postData) {
      res.status(404).json({ message: 'Could not find post with that id!' });
      return;
    }

    const post = postData.get({ plain: true });

    res.render('dashboard', { 
      singleQuery: true,
      post,
      loggedIn: req.session.loggedIn,
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
