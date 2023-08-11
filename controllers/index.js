const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const followingRoutes = require('./followingRoutes');
const hotRoutes = require('./hotRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const placeRoutes = require('./placeRoutes')

router.use('/', homeRoutes);
router.use('/following', followingRoutes);
router.use('/hot', hotRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/place/details', placeRoutes);

module.exports = router;
