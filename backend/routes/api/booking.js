const express = require('express');
const { Booking, Spot } = require('../../db/models');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const bookings = await Booking.findAll();
    const data = bookings.map(booking => booking.dataValues)
    res.json(data)
}))

router.post('/', asyncHandler(async(req, res) => {
    const booking = await Booking.create(req.body);
    res.json(booking);
}));
