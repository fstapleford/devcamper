const express = require("express")
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000
const bootcamps = require('./routes/bootcamps')
const morgan = require('morgan')
dotenv.config({ path: "./config/config.env" })
const ENV = process.env.NODE_ENV

const app = express()

if (ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/bootcamps/', bootcamps)

app.listen(PORT,
  console.log(`Server running: ${ENV} on port ${PORT}`)
)
