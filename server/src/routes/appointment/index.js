const express = require('express')

const create = require('./routes/create')

const router = express.Router({ mergeParams: true })

router.route('/').get(() => console.log('pinged'))
router.route('/').post(create)
router.route('/delete').get(() => console.log('delete pinged'))

module.exports = router