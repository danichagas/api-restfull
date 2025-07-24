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

mongoose.connect('mongodb+srv://chagas:dani@apicluster.jgmdiig.mongodb.net/bancodaapi?retryWrites=true&w=majority&appName=APICluster')
.then(() => {
  console.log('MongoDB Conectado')
  app.listen(3333)
})
.catch((err) => console.log(err))