const async_handler = require('express-async-handler')
const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

const userMiddleware = async_handler(async (req, res, next) => {

    const auth = req.headers['authorization']

    if (!auth) {
        res.status(403)
        throw new Error('forbidden')
    }

    token = auth.split(' ')[1]
    if (!token) {
        res.status(403)
        throw new Error('forbidden')
    }


    const result = jwt.verify(token, process.env.JWT_SECRET)
    const _user = await users.findOne({ _id: result.id }).select('-password')

    if (!_user) {
        res.status(403)
        throw new Error('forbidden')
    }

    req.user = _user
    next()

})

module.exports = userMiddleware