const express = require("express");

const router = express.Router();

const {
  saveUser,
  mutualUsers,
  searchUserByQuery,
  deletelUser,
  updateUser,
} = require("../controllers/userController");

// GitHub User Data Storage
router.get("/save-user/:username", saveUser);

// Mutual Followers as Friends
router.get("/find-mutual-followers/:username", mutualUsers);

// Search Functionality
router.get("/search-users", searchUserByQuery);

// Soft Delete User Records
router.delete("/delete-user/:username", deletelUser);

// Update User Details
router.patch("/update-user/:username", updateUser);

module.exports = router;
