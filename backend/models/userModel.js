const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'enter user name'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'enter a email']
    },
    password: {
        type: String,
        required: [true, 'enter a password']
    }
    ,
    imageURL: {
        type: String,
        default: ''
    },
    carts: {
        type: Object,
        default: {}
    },
    orders: {
        type: Array,
        default: []
    },
    favorites: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)