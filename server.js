const express = require("express")
const dotenv = require("dotenv")
const colors = require('colors')
const PORT = process.env.PORT || 5000
const bootcamps = require('./routes/bootcamps')
const morgan = require('morgan')
const connectDB = require('./config/db')
const errorHandler  = require('./middleware/errorMiddleware');
dotenv.config({ path: "./config/config.env" })
const ENV = process.env.NODE_ENV

const app = express()

app.use(express.json())
connectDB()

if (ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps/', bootcamps)
app.use(errorHandler)
const server = app.listen(PORT, console.log(`Server running: ${ENV} on port ${PORT}`.yellow.bold))

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold)
  server.close(() => process.exit())
})