const express = require('express');
const { Booking, Users } = require('../../db/models');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const { check, validationResult } = require('express-validator');
const { db } = require('../../config');

const router = express.Router();

// get all bookings for given user
router.get('/:id', restoreUser, asyncHandler(async(req, res) => {
    const id = req.user.id;
    const bookings = await Booking.findAll({
        where: { userId: id },
        include: db.Spot
    });

    // const response = bookings.map(book => book);
    res.json(bookings)
}))

router.post('/', asyncHandler(async(req, res) => {
    const booking = await Booking.create(req.body);
    res.json(booking);
}));

module.exports = router;
