const products = require('../models/productModel')
const async_handler = require('express-async-handler')

// get all items inside of associate products id inside in user.carts 
const getCarts = async_handler(async (req, res) => {
    const ids = Object.keys(req.user.carts)
    const cartList = await products.find({ _id: { $in: ids } }).select('productName imageURL priceInCent stocks')
    res.json(cartList)
})


// add a new product's id inside a users cart list
// cart will be { 'id's string' : 3 }
const addCarts = async_handler(async (req, res) => {
    req.user.carts = { ...req.user.carts, ...req.body }
    const newUser = await req.user.save()
    res.json(newUser.carts)
})



// delete a cart
const deleteCarts = async_handler(async (req, res) => {
    const r = delete req.user.carts[req.params.id]
    const result = await req.user.save()
    res.json(r)
})


module.exports = {
    addCarts, getCarts, deleteCarts,
}