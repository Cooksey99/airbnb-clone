const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { requireAuth, restoreUser } = require('../../utils/auth.js');
const sessionRouter = require('./session')
const usersRouter = require('./users')

const router = require('express').Router()

router.use('/session', sessionRouter)
router.use('/users', usersRouter)



module.exports = router
