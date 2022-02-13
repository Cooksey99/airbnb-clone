const express = require('express');
const { Spot } = require('../../db/models');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth');

const { check, validationResult } = require('express-validator');

const router = express.Router();

const spotValidator = [
    check('title')
        .notEmpty()
        .withMessage('Please enter a title.'),
    check('guestCount')
        .notEmpty()
        .withMessage('Please enter a guest count.')
        .isInt({ min: 0 }),
    check('staySize')
        .notEmpty()
        .withMessage('Please select the stay size.')
        .isInt(),
    check('roomCount')
        .notEmpty()
        .withMessage('Please enter the number of rooms.')
        .isInt(),
    check('bathCount')
        .notEmpty()
        .withMessage('Please enter the number of bathrooms.')
        .isInt(),
    check('bathCount')
        .notEmpty()
        .withMessage('Please enter nightly price.')
        .isInt(),
    check('description')
        .notEmpty()
        .withMessage('Please enter a description'),
    check('image1')
        .notEmpty()
        .withMessage('Please enter an image URL'),
    check('image2'),
    check('image3'),
    check('image4'),
    check('image2')
    ]

// http://localhost:5000/api/spots - test route
router.get('/', asyncHandler(async(req, res) => {

    const allSpots = await Spot.findAll();
    res.json(allSpots);
}));

router.get('/:spotId', restoreUser, asyncHandler(async(req, res) => {
    // console.log('req:      ' + req)
    const { spotId }  = req.params;

    const spot = await Spot.findByPk(spotId);
    res.json(spot);
}));

// creating a listing/spot
router.post('/', spotValidator, restoreUser,
asyncHandler(async(req, res) => {
    console.log('----------------' + req.user.id);
    const spot = await Spot.create({...req.body, userId: req.user.id})
    res.json(spot);
}))

// edit /spot/:id
router.put('/:id', spotValidator, restoreUser,
asyncHandler(async(req, res) => {
    // const spot = await Spot.findByPk(req.params.id);
    // spot.update({ ...req.body, userId: req.user.id });
    // const spot = await Spot.update({...req.body, userId: req.user.id})
    // res.json(spot);
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    spot.set(req.body);
    await spot.save();
    res.json(spot)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const spotId = req.params.id;
    const spot = await Spot.findByPk(spotId);
    await spot.destroy();
}))

module.exports = router;
