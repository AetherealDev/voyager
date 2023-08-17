const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const feedRoutes = require('./feedRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const profileRoutes = require('./profileRoutes');



router.use('/', homeRoutes);
router.use('/feed', feedRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);


module.exports = router;
