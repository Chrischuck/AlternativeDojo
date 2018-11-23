const express = require('express')

const create = require('./routes/create')
const read = require('./routes/read')
const update = require('./routes/update')

const router = express.Router({ mergeParams: true })

router.route('/').get(read)

router.route('/').post(create)

router.route('/update').post(update)

module.exports = router