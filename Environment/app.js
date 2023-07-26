require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/file/home.html")
})
app.get("/triangle", (req,res)=>{
    res.sendFile(__dirname + "/file/triangle.html")
})
app.post("/triangle", (req,res)=>{
    const height = req.body.height
    const base = req.body.base
    const area = 0.5 * height * base
    res.send(` <h2> Triangle is ${area} </h2>`)
})

app.get("/circle", (req,res)=>{
    res.sendFile(__dirname + "/file/circle.html")
})

app.post("/circle", (req,res)=>{
    const radius = req.body.radius
    const area = Math.PI * radius * radius
    res.send(`<h2>Cricle calculation is ${area}</h2>`)
})

app.use((req,res)=>{
    res.send("<h2>404 page is not Found</h2>")
})

module.exports = app;