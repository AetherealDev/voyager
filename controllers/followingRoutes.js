const router = require('express').Router();
const { User, Post } = require('../models');
// const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll(
            { 
                include: [
                    {model: User}
                ] 
            });
        
        const posts = postData.map((post) => post.get( {plain: true})); 
        res.render('following', {posts});
    } catch (err) {
        console.error();
        res.status(500).json(err);
    }
  });


module.exports = router;
