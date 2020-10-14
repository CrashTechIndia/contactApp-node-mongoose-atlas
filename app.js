const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb+srv://testUser:testUser@clustertrial.azpqw.mongodb.net/sample_airbnb?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const contactRouter = require('./routes/contacts')
app.use('/contacts',contactRouter)

app.listen(9000, () => {
    console.log('Server started')
})