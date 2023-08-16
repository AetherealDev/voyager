const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  res.redirect('/recent');
});

router.get('/recent', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = postData.map((post) =>
      post.get({ plain: true })
    );

    res.render('feed', { posts });
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

    res.render('feed', { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:place_id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        placeId: req.params.place_id
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

    res.render('feed', { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//from old work
// router.get('/', async (req, res) => {

//     try {
//         const postData = await Post.findAll(
//             { 
//                 include: [
//                     {
//                         model: User,
//                         attributes: ['id', 'username'],
//                     },
//                 ] ,
//             });
        
//         const posts = postData.map((post) => post.get( {plain: true})); 
//         res.render('following', {posts});
//     } catch (err) {
//         console.error();
//         res.status(500).json(err);
//     }
//   });


module.exports = router;






module.exports = router;
