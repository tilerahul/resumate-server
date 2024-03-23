const express = require("express");
const router = express.Router();
const {home, login, register, getAllUser} = require("../controller/auth-controller")

router.route("/").get(home);
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/getUsers").get(getAllUser);

module.exports = router;