const express = require('express')
let mongodb = require('mongodb')
let url = require('../url')
let mcl = mongodb.MongoClient
let router = express.Router()

router.get("/", (req, res) => {
    mcl.connect(url, (err, conn) => {
        if (err)
            console.log('Error in connection:- ', err)
        else {
            let db = conn.db('nodejs')
            db.collection('products').find().toArray((err, array) => {
                if (err)
                    console.log('Error :- ' + err)
                else {
                    console.log('Data sent')
                    res.json(array)
                    conn.close()
                }
            })
        }
    })
})

module.exports = router
