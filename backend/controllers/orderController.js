const products = require('../models/productModel')
const orders = require('../models/orderModel')
const async_handler = require('express-async-handler')
const { v4: uuid } = require('uuid')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE)



//// create a new order data by products id
const createOrder = async_handler(async (req, res) => {

    const ids = req.body.orders.map(ord => ord._id)
    const _prod = await products.find({ _id: { $in: ids } }).select('priceInCent productName imageURL')

    /// return item's details 
    const line_items = req.body.orders.map(order => {
        const prod = _prod.find(p => order._id.toString() === p._id.toString())

        return {
            name: prod.productName,
            _id: prod._id,
            imageUrl: prod.imageURL,
            unit_amount: prod.priceInCent,
            quantity: order.quantities
        }
    })
    res.json({ items: line_items })
})











// accepting order when customer checked out their orders.
const accpetOrder = async_handler(async (req, res) => {

    const { token, products: _products, total } = req.body

    // create a customer with their token
    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    })

    // create a unique idempotency key
    const idempotency_key = uuid()

    // create charge of products pursharses
    // based on customers order checkout
    const charge = await stripe.charges.create({
        amount: total,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `purshased ${products._products} items for ${total / 100}`,
        shipping: {
            name: token.card.name,
            address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.address_zip
            }
        }
    }, {
        idempotencyKey: idempotency_key
    })


    // create a list of order to insert order database
    const payed_orders = _products.map(product => {
        return {
            user: req.user._id,
            name: product.name,
            price: product.unit_amount,
            quantity: product.quantity,
            payment: true,
            imageUrl: product.imageUrl,
            chargeId: charge.id,
            address: {
                line1: token.card.address_line1,
                line2: token.card.address_line2,
                city: token.card.address_city,
                country: token.card.address_country,
                postal_code: token.address_zip
            },
            status: "on place"
        }
    })
    // store the order in database

    const created_orders = await orders.insertMany(payed_orders)

    const new_orders = []

    // retrive the ids of products
    created_orders.map(order => {
        new_orders.push(order._id)
    })

    // add orders id to the customers order list
    req.user.orders = [...new_orders, ...req.user.orders]
    // remove the items from the user's cart list
    const itemsList = _products.map(p => p._id)

    req.user.carts = req.user.carts.filter((cart) => {

        let retuenValue = true

        itemsList.forEach(c => {
            if (c === cart) {
                retuenValue = false
                return
            }
        });
        return retuenValue
    })

    await req.user.save()

    res.status(201).json({ new_orders })
})










const getOrders = async_handler(async (req, res) => {
    const _orders = await orders.find({ user: req.user._id }).limit(20)
    res.send(_orders)
})

const getOrder = async_handler(async (req, res) => {

    const _order = await orders.findOne({ _id: req.params.id, user: req.user._id })

    if (_order !== null)
        return res.json(_order)
    req.statusCode = 404
    throw new Error('product not found.')
})

module.exports = {
    createOrder,
    accpetOrder,
    getOrders,
    getOrder
}