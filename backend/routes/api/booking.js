const express = require('express');
const { Booking, Users } = require('../../db/models');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const { check, validationResult } = require('express-validator');
const { db } = require('../../config');

const router = express.Router();

// get all bookings for given user
router.get('/:id', restoreUser, asyncHandler(async(req, res) => {
    const id = req.params.id;
    console.log('test')
    const bookings = await Booking.findAll({
        where: { userId: id },
        include: db.Spot
    });

    const response = bookings.map(book => book);
    res.json(response)
}))

router.get('/', asyncHandler(async(req, res) => {
    const bookings = await Booking.findAll();
    const books = bookings.map(book => book.dataValues)
    res.json(books)
}))


router.post('/', asyncHandler(async(req, res) => {
    const booking = await Booking.create(req.body);
    res.json(booking);
}));

// delete booking of choice
router.delete('/:id', restoreUser, asyncHandler(async(req, res) => {
    // const bookingId = req.params.id;

    // const booking = await Booking.findByPk(bookingId);
    // await booking.destroy();

    const id = req.params.id;
    const booking = await Booking.findByPk(id)
    await booking.destroy()
    return res.json(id)
}))

module.exports = router;
