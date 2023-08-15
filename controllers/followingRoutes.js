const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {

    try {
        const postData = await Post.findAll(
            { 
                include: [
                    {
                        model: User,
                        attributes: ['username'],
                    },
                ] ,
            });
        
        const posts = postData.map((post) => post.get( {plain: true})); 
        res.render('following', {posts});
    } catch (err) {
        console.error();
        res.status(500).json(err);
    }
  });


module.exports = router;
