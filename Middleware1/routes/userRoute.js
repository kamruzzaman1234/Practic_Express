const express = require("express");
const { getUsers, postUser } = require("../controller/usersController");
const app = express()
const router = express.Router()

router.get("/user", getUsers)


router.post("/user", postUser)

module.exports = router