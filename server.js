let express = require('express')
let bodyparser = require('body-parser')
let cors = require('cors')
let app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors())

let port = 8080

let fetch = require('./fetch/fetch')
let insert = require('./insert/insert')
let update = require('./update/update')
let remov = require('./delete/delete')

app.use("/fetch", fetch)
app.use("/insert", insert)
app.use("/update", update)
app.use("/delete", remov)
app.listen(port, () => {
    console.log("Server listening port", port)
})
