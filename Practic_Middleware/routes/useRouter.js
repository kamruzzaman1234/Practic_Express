const express = require("express");
const { getUsers, postUsers } = require("../controller/useController");
const router = express.Router();

router.get("/user", getUsers);
router.post("/user", postUsers);

module.exports = router;



