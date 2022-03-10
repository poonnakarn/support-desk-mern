const express = require('express')
const router = express.Router({ mergeParams: true }) // Add this
const { getNotes } = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes)

module.exports = router
