const express = require('express')
const router = express.Router()

const { getCarts, addCarts, deleteCarts } = require('../controllers/cartController')
const userMiddleware = require('../middleware/userMiddleware')

router.use(userMiddleware)

router.get('/', getCarts)
router.post('/', addCarts)
router.put('/', deleteCarts)

module.exports = router