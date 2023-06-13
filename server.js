require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes')

const app = express();
app.use(bodyParser.json())
app.use(cors())

const mongodbUrl = process.env.DB_CONNECTION
mongoose.connect(mongodbUrl)
const db = mongoose.connection
db.on("error",console.error.bind(console, "connection error"))
db.on("open", function() {
    console.log("connection successfull")
})


app.get('/',(req,res)=> {
    res.send("app is running...")
})

//Routes
app.use('/todos',router)

app.listen('3002',()=> {
    console.log('app is running...')
})