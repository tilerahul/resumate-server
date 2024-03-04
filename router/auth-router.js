const express = require("express");
const router = express.Router();
const authControllers = require("../controller/auth-controller")

router.route("/").get(authControllers.home);
router.route("/login").post(authControllers.login);
router.route("/register").post(authControllers.register);
router.route("/getUser").post(authControllers.getUser);

module.exports = router;