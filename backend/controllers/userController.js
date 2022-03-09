const async_handler = require('express-async-handler')
const users = require('../models/userModel')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


// login user
const loginUser = async_handler(async (req, res) => {

    const _user = await users.findOne({ email: req.body.email })

    if (!_user) {
        res.status(401)
        throw new Error('User not found.')
    }

    if (!await bcrypt.compare(req.body.password, _user.password)) {
        res.status(401)
        throw new Error('password not match.')
    }

    const token = jwt.sign({
        id: _user._id
    }, process.env.JWT_SECRET)

    res.json(token)
})



// create a new user
const addUser = async_handler(async (req, res) => {

    const salt = await bcrypt.genSalt()
    req.body.password = await bcrypt.hash(req.body.password, salt)

    const newUser = await users.create(req.body)


    const token = jwt.sign({
        id: newUser._id
    }, process.env.JWT_SECRET)

    res.json(token)
})

// get user information

const getUser = async_handler(async (req, res) => {
    res.json(req.user)
})

module.exports = {
    getUser,
    addUser,
    loginUser
}

//
