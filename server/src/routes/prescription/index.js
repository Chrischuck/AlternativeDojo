const express = require('express')

const create = require('./routes/create')
const read = require('./routes/read')
const fill = require('./routes/fill')
const del = require('./routes/delete')

const router = express.Router({ mergeParams: true })

router.route('/').get(read)

router.route('/').post(create)
router.route('/delete').post(del)
router.route('/fill').post(fill)

module.exports = router