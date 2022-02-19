const async_handler = require('express-async-handler')
const products = require('../models/productModel')


// get uproduct with no catagory by default -> limit 100
// get product by catagory -> 100
const getProducts = async_handler(async (req, res) => {

    let _products
    if (!req.query.catagory)
        _products = await products.find().select("productName imageURL rating  priceInCent").limit(100)
    else
        _products = await products.find({
            catagory: req.query.catagory
        }).limit(100)

    res.json(_products)

})

// get a spicific product by it's id
const getProductById = async_handler(async (req, res) => {

    const _product = await products.findOne({ _id: req.params.id })

    res.json(_product)

})

const getCarts = (req, res) => {
    console.log('hello world')
}

const addCarts = (req, res) => {
    console.log('hello world from add carts')
}



// add a new product inside database.
const addProduct = async_handler(async (req, res) => {

    const new_product = await products.create(req.body)

    res.status(201).json(new_product)
})

// update a product by it's id
const updateProduct = async_handler(async (req, res) => {

    const updated = await products.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    res.json(updated)
})

// delete a product by it's id
const deleteProduct = async_handler(async (req, res) => {

    const deleteProduct = await products.deleteOne({ _id: req.params.id })

    res.json(deleteProduct)
})


// export the function or controller to use by router.
module.exports = { getProducts, getProductById, getCarts, addCarts, addProduct, updateProduct, deleteProduct }