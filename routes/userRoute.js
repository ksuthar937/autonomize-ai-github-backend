const express = require("express");

const router = express.Router();

const { saveUser } = require("../Controllers/userController");

// GitHub User Data Storage
router.get("/save-user/:username", saveUser);

module.exports = router;
