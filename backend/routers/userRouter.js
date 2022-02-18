const express = require('express')
const router = express.Router()

const { addUser, loginUser, getUser } = require('../controllers/userController')
const userMiddleware = require('../middleware/userMiddleware')

router.get('/', userMiddleware, getUser)
router.post('/', addUser)
router.post('/login', loginUser)


module.exports = router