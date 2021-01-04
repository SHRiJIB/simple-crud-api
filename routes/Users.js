const express = require("express");

const {
  addUser,
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.js");

const router = express.Router();

//fetching all users details
router.get("/", getAllUser);

//fetching one user details
router.get("/:id", getOneUser);

//adding a user data to database
router.post("/", addUser);

//update the details of one user
router.patch("/:id", updateUser);

//delete a user from database
router.delete("/:id", deleteUser);
module.exports = router;
