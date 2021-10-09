const express = require("express");
const { login, signup, logout, getLoggedInUser } = require("./auth.controller");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.get("/loggedInUser", getLoggedInUser);

module.exports = router;
