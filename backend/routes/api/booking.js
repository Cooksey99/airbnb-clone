const express = require('express');
const { Booking, Spot } = require('../../db/models');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const bookings = await Booking.findAll();
    res.json(bookings)
}))

router.post('/', asyncHandler(async(req, res) => {
    const booking = await Booking.create(req.body);
    res.json(booking);
}));
