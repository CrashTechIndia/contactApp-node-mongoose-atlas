const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();


const app = express()
const user = process.env.user;
const pw = process.env.pw;
const db = process.env.db;
const port = process.env.PORT || 9000

const url = process.env.uri;


mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})

const con = mongoose.connection

// con.on('open', () => {
//     console.log('connected...')
// })
con.once('open', function(){
    console.log('Conection has been made!');
  }).on('error', function(error){
      console.log('Error is: ', error);
  });

app.use(express.json())

const contactRouter = require('./routes/contacts')
app.use('/contacts',contactRouter)

app.listen(port, () => {
    console.log('Server started')
})