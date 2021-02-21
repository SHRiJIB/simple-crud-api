const express = require("express");

const {
  addUser,
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
  goToEditPage,
} = require("../controllers/user.js");

const router = express.Router();

//fetching all users details
router.get("/", getAllUser);
//edit details
router.get("/edit/:id", goToEditPage);
//fetching one user details
router.get("/:id", getOneUser);

//adding a user data to database
router.post("/", addUser);

//update the details of one user
router.patch("/edit/update/:id", updateUser);

//delete a user from database
router.delete("/:id", deleteUser);

module.exports = router;
