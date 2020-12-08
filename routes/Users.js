const express = require("express");
const { db } = require("../firebase/config.js");
const router = express.Router();

router.get("/", async (req, res) => {
  const userRef = db.collection("users").doc("srijibK");
  const user = await userRef.get();

  if (!user.exists) res.send("no user found");
  else res.send(user.data());
});

router.get("/all", async (req, res) => {
  const usersRef = db.collection("users");
  const snap = await usersRef.get();

  snap.forEach((element) => {
    console.log(element.data());
  });
  res.send("Found");
});

router.post("/", async (req, res) => {
  var user = {
    name: "srijibK",
    tel: "7679842307",
  };
  const userRef = db.collection("users").doc(user.name);
  await userRef
    .set(user)
    .then(() => {
      res.send("POST ROUTE REACHED!");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
