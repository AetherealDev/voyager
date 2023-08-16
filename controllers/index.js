const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const feedRoutes = require('./feedRoutes');
const dashboardRoutes = require('./dashboardRoutes');


router.use('/', homeRoutes);
router.use('/following', feedRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
