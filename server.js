require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  }),
)
app.use(express.json())

const userRoute = require('./routes/userRoute')
app.use('/user', userRoute)

const DB_URL = process.env.DB_URL

mongoose.connect(`${DB_URL}`)
.then(() => {
  console.log('MongoDB Conectado')
  app.listen(3333)
})
.catch((err) => console.log(err))