const path = require('path')
require('dotenv').config({
    path: path.resolve(__dirname, 'config', 'config.env')
})

// import server's necessary modules
const express = require('express')
const app = express()
const SERVER = require('http').Server(app)
const PORT = process.env.PORT

// cors unlock for development

const cors = require('cors')
app.use(cors({
    origin: '*'
}))


// accept body

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


/// seeing all incomming request
const morgan = require('morgan')
app.use(morgan('tiny'))

// connecting to the database
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_URL, {}).then(() => {
    console.log('Connected to the database')
}).catch((err) => {
    console.log('Database connection fail.')
})





// importing routers
const productsRouter = require('./routers/productRouter')
const userRouter = require('./routers/userRouter')
const cartRouter = require('./routers/cartRouter')
const orderRouter = require('./routers/orderRouter')
const favorite = require('./routers/favoriteRoute')

app.use('/api/products', productsRouter)
app.use('/api/users', userRouter)
app.use('/api/carts', cartRouter)
app.use('/api/order', orderRouter)
app.use('/api/favorite', favorite)


app.get('/', (req, res) => {
    res.json('server listing.....')
})


// error handling
const errorHandler = require('./middleware/errorHandler')
app.use(errorHandler)


// server start
SERVER.listen(PORT, () => {
    console.log(`Server listing :${PORT}`)
})
