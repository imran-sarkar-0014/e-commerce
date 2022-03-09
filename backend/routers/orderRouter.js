const express = require('express')
const userMiddleware = require('../middleware/userMiddleware')
const router = express.Router()

const { createOrder, accpetOrder, getOrders, getOrder } = require('../controllers/orderController')


router.use(userMiddleware)

router.post('/create', createOrder)
router.post('/accept', accpetOrder)
router.get('/', getOrders)
router.get('/:id', getOrder)

module.exports = router