const router = require('express').Router();
//const getPlaceDetails = require('../utils/getPlaceDetails');

router.get('/', async (req, res) => {
    console.log(req.query.placeId)
});

module.exports = router;
