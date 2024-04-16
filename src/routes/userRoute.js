const express = require("express");

const router = express.Router();

const {
  saveUser,
  mutualUsers,
  searchUserByQuery,
} = require("../controllers/userController");

// GitHub User Data Storage
router.get("/save-user/:username", saveUser);

// Mutual Followers as Friends
router.get("/find-mutual-followers/:username", mutualUsers);

// Search Functionality
router.get("/search-users", searchUserByQuery);

module.exports = router;
