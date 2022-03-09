const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Give a user id.']
    },
    chargeId: {
        type: String,
        required: [true, 'give a charge id']
    },
    name: {
        type: String,
        required: [true, 'add a name']
    },
    imageUrl: {
        type: String,
        required: [true, 'add a image url']
    },
    price: {
        type: Number,
        required: [true, 'add price']
    },
    quantity: {
        type: Number,
        required: [true, 'Add quantity']
    },
    payment: {
        type: Boolean,
        default: false
    },
    address: {
        type: Object,
        required: [true, 'Give a address']
    },
    status: {
        type: String,
        default: 'on place'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('orders', orderSchema)