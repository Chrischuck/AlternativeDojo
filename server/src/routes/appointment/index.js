const express = require('express')

const router = express.Router({ mergeParams: true })

router.route('/').get(() => console.log('pinged'))
router.route('/').post(() => console.log('pinged'))
router.route('/delete').get(() => console.log('delete pinged'))

module.exports = router