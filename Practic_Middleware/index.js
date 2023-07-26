const express = require("express");
const app = express();
const useRoute = require("./routes/useRouter");
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(useRoute);
app.listen(8000, (req,res)=>{
    console.log("Server start")
})
app.use((err, req,res,next)=>{
    res.status(202).json({
        message : "resourse not found",
    })
})