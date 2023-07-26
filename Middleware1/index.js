const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const useRouter = require('./routes/userRoute');
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(useRouter) 

app.use((err,req,res,next)=>{
    res.status(404).json({
        message: "resource not found"
    })
})

app.listen(8000, ()=>{
    console.log("Server start")
})