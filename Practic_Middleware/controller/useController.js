const path = require("path");
const users = require('../model/userModel')

exports.getUsers = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../view/index.html"))
}
exports.postUsers = (req,res)=>{
    const name = req.body.name
    const age = req.body.age
    const user = {
        name,
        age
    }
    users.push(user)
    res.status(202).send({
        message : "success",
        users
    })

}