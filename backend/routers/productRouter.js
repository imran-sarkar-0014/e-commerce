const express = require('express')
const router = express.Router()

const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController')
const userMiddleware = require('../middleware/userMiddleware')

router.get('/', getProducts)
router.get('/:id', getProductById)


router.post('/', addProduct)
router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router