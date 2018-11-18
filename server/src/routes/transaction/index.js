const express = require('express')

const read = require('./routes/read')

const router = express.Router({ mergeParams: true })

router.route('/').get(read)

module.exports = router