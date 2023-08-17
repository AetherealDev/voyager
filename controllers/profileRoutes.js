const express = require('express');
const router = express.Router();
const { User, Post} = require('../models');
const withAuth = require("../utils/auth");

router.get('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.userID, {
            include: [
                {
                    attributes: { exclude: ['password'] },
                    model: Post,
                },
            ],
        });

        const user = userData.get({ plain: true });
        res.render('profile', {
            user,
            loggedIn: req.session.loggedIn,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
