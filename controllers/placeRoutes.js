const router = require('express').Router();
//const getPlaceDetails = require('../utils/getPlaceDetails');

router.get('/', async (req, res) => {
    console.log(req.query.placeId)
    // try {
    //     const placeId = req.params.placeId; // Access the placeId from the route parameter
    //     const placeDetails = await getPlaceDetails(placeId); // Call the getPlaceDetails function passing the placeId
    //
    //     // Handle the place details and send the response to the client
    //     res.json(placeDetails);
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    // }
});

module.exports = router;
