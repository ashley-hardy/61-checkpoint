const express = require('express')
const router = express.Router()
const control = require('../control/control.js')

router.get('/', control.getAll)

// router.get('/:id', control.getById)
//
// router.post('/', control.createShoe)
//
// router.put('/:id', control.updateShoe)
//
// router.delete('/:id', control.removeShoe)

module.exports = router
