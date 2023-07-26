const express = require("express");
const app = express();
const adminRouter = express.Router();

const logger = (req,res,next)=>{
    console.log(`Your logger is ${new Date(Date.now()).toLocaleString()}
     - ${req.method} - ${req.originalUrl} - ${req.ip} - ${req.protocol}`);
     next()
     throw new Error()
}
adminRouter.use(logger)
adminRouter.get("/dashBoard", (req,res)=>{
    res.send("DashBoar is Start")
})

app.use('/admin', adminRouter)

app.get("/about",(req,res)=>{
    res.send("<h2>About Page is Start</h2>")
})
const errorMiddleware = (err, req,res,next)=>{
    console.log(err.message)
    res.status(500).send("There is a server side error")
}

adminRouter.use(errorMiddleware);



app.listen(8000, ()=>{
    console.log("Server start")
})
