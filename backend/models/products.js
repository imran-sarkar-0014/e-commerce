const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    priceInCent: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 5,
    },
    reviews: {
        type: Array,
        default: []
    },
    stocks: {
        type: Number,
        default: 0
    },
    about: {
        type: String,
        required
    },
    spacifications: {
        type: Array,
        default: []
    }

}, {
    timestamps: true
})


module.exports = mongoose.model(productSchema)