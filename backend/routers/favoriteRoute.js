const express = require('express')
const router = express.Router()

const { getFavarites, addToFavirote, removeFavirite } = require('../controllers/favirote')
// const addToFavirote = require('../controllers/favirote')
// const removeFavirite = require('../controllers/favirote')

const userMiddleware = require('../middleware/userMiddleware')

router.use(userMiddleware)


router.get('/', getFavarites)
router.post('/:id', addToFavirote)
router.delete('/:id', removeFavirite)

module.exports = router