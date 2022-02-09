const express = require('express');
const { Spot } = require('../../db/models');
const asyncHandler = require('express-async-handler');

const router = express.Router();

// http://localhost:5000/api/spots - test route
router.get('/', asyncHandler(async(req, res) => {
    const allSpots = await Spot.findAll();
    res.json(allSpots);
}))

module.exports = router;
