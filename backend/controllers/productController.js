const async_handler = require('express-async-handler')
const products = require('../models/productModel')

const getProducts = async_handler(async (req, res) => {

    const _products = await products.find().select("productName imageURL rating  priceInCent")

    res.json(_products)

})
const addProduct = async_handler(async (req, res) => {

    const new_product = await products.create(req.body)

    res.status(201).json(new_product)
})

module.exports = { getProducts, addProduct }