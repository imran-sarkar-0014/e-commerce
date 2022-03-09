const async_handler = require('express-async-handler')
const products = require('../models/productModel')


const getFavarites = async_handler(async (req, res) => {

    const _products = await products.find({ _id: { $in: req.user.favorites } }).select('productName imageURL priceInCent')

    res.json(_products)
})




const addToFavirote = async_handler(async (req, res) => {

    req.user.favorites = [req.params.id, ...req.user.favorites]

    const _user = await req.user.save()

    res.json(_user.favorites)
})


const removeFavirite = async_handler(async (req, res) => {

    req.user.favorites = req.user.favorites.filter(f => f._id !== req.params.id)

    const _user = await req.user.save()

    res.json(_user.favorites)
})


module.exports = {
    getFavarites,
    addToFavirote,
    removeFavirite
}