const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "add a name"],
    },
    productDecription: {
        type: String,
        required: [true, 'add a description'],
    },
    catagory: {
        type: Array,
        required: [true, "spacify a catagory"]
    },
    imageURL: {
        type: String,
        required: [true, "add a image link"],
    },
    priceInCent: {
        type: Number,
        required: [true, "add it's price"]
    },
    stocks: {
        type: Number,
        required: [true, "add it's stock"]
    },
    rating: {
        type: Number,
        default: 5,
    },
    reviews: {
        type: Array,
        default: []
    },
    about: {
        type: Array,
        default: []
    },
    spacifications: {
        type: Object,
        default: {}
    }
}, {
    timestamps: true
})


module.exports = mongoose.model("products", productSchema)