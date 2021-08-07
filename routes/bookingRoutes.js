const express = require('express')
const bookingController = require('../controllers/bookingController')

const { sendEmail } = bookingController

const router = express.Router()

router.post('/sendEmail', sendEmail)

module.exports = router
