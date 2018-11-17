const express = require('express')

const create = require('./routes/create')
const read = require('./routes/read')

const router = express.Router({ mergeParams: true })

router.route('/').get(read)
router.route('/').post(create)
router.route('/delete').get(() => console.log('delete pinged'))

module.exports = router