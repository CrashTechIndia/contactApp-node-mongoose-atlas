const express = require('express')
const mongoose = require('mongoose')


const app = express()
const user = process.env.user;
const pw = process.env.pw;
const db = process.env.db;
const url = `mongodb+srv://${user}:${pw}@clustertrial.azpqw.mongodb.net/${db}?retryWrites=true&w=majority`;
const port = process.env.PORT || 9000

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const contactRouter = require('./routes/contacts')
app.use('/contacts',contactRouter)

app.listen(port, () => {
    console.log('Server started')
})