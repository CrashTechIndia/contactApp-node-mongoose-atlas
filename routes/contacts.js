const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')


router.get('/', async(req,res) => {
    try{
           const contacts = await Contact.find()
           res.json(contacts)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const contact = await Contact.findById(req.params.id)
           res.json(contact)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const contact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    })

    try{
        const a1 =  await contact.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const contact = await Contact.findById(req.params.id) 
        contact.email = req.body.email
        const a1 = await contact.save()
        res.json(a1)   
    }catch(err){
        res.send('Error + '+err)
    }

})

module.exports = router