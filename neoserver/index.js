const express = require('express')
const bcrypt = require('bcrypt')
const app = express()
app.use(express.json())
// const {users} = require('./db.json')
const fs = require('fs')
// const { json } = require('express')
const users = []
app.post('/users', async(req,res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const user = {name:req.body.name, phone: req.body.phone, password:hashedPassword}
            users.push(user)
        // fs.writeFile("db.json",JSON.stringify(user), (err) => {
        //     if(err) throw err;
        // })
        res.status(201).send(users)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

app.get('/users', async(req,res) =>{
    res.json(users)
})

app.post('/users/login' , async(req,res) =>{
    const user = users.find(user => user.name ==req.body.name)
    if(user == null){
        return res.status(400).send("user not found")
    }
    try{
        if( await bcrypt.compare(req.body.password, user.password)){
            res.send("success")
        }
        else{
            res.send("not allowed")
        }
    } catch{
        res.status(500).send()
    }
})
app.listen(3004)


