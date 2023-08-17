const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  res.redirect('/feed/recent');
});

router.get('/recent', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
      order: [
        ['id', 'DESC'],
      ]
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('feed', { 
      posts,
      loggedIn: req.session.loggedIn   
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/popular', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
      order: [
        ['upvote', 'DESC'],
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('feed', { 
      posts,
      loggedIn: req.session.loggedIn   
     });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/search/:place_id', withAuth, async (req, res) => {
  console.log(req.params.place_id);
  try {
    const postData = await Post.findAll({
      where: {
        place_id: req.params.place_id
      },
      include: [
        {
          model: User,
        },
      ],
      order: [
        ['upvote', 'DESC'],
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('feed', {
      posts,
      loggedIn: req.session.loggedIn   
     });
  } catch (err) {
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

    console.log(post);

    res.render('feed', {
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
