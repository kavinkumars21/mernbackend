const express = require('express')
let mongodb = require('mongodb')
let url = require('../url')
let mcl = mongodb.MongoClient
let router = express.Router()

router.post("/", (req, res) => {
    let obj = req.body
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection :- ', err)
        else {
            let db = conn.db("miniprj")
            db.collection('products').insertOne(obj, (err) => {
                if (err)
                    res.json({ 'insert': 'Error ' + err })
                else {
                    console.log("Data inserted")
                    res.json({ 'insert': 'success' })
                    conn.close()
                }
            })
        }
    })
})


router.post("/createUser", (req, res) => {
    let obj = {
        "userid": req.body.userid,
        "uname": req.body.uname,
        "upwd": req.body.upwd,
        "email": req.body.email,
        "address": req.body.address,
        "contact": req.body.contact
    }
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection :- ', err)
        else {
            let db = conn.db("miniprj")
            db.collection('users').insertOne(obj, (err) => {
                if (err)
                    res.json({ 'userInsert': 'Error ' + err })
                else {
                    console.log("User inserted")
                    res.json({ 'userInsert': 'success' })
                    conn.close()
                }
            })
        }
    })
})


router.post("/cartInsert",(req,res)=>{
    let obj = {
        "p_id" : req.body.p_id,
        "p_cost" : req.body.p_cost,
        qty : 1,
        "p_img":req.body.p_img,
        "uname" : req.body.uname
    }
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection :- ', err)
        else {
            let db = conn.db("miniprj")
            db.collection('cart').insertOne(obj, (err) => {
                if (err)
                    res.json({ 'cartInsert': 'Error ' + err })
                else {
                    console.log("Prouct in Cart inserted")
                    res.json({ 'cartInsert': 'success' })
                    conn.close()
                }
            })
        }
    })
})

module.exports = router
