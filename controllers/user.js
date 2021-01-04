const { db } = require("../firebase/config.js");

const { v4 } = require("uuid");

const addUser = async (req, res) => {
  const user = req.body;
  const uid = v4();

  const userWithID = { ...user, id: uid };
  const userRef = db.collection("users").doc(userWithID.id);

  await userRef
    .set(userWithID)
    .then(() => {
      res.render("post", { user: user.name });
    })
    .catch((err) => {
      console.log(err);
    });
};
const getOneUser = async (req, res) => {
  const { id } = req.params;
  const usersRef = db.collection("users");
  const snap = await usersRef.get();

  snap.forEach((doc) => {
    if (doc.data().id === id) {
      res.send(doc.data());
    }
  });
};
const getAllUser = async (req, res) => {
  const usersRef = db.collection("users");
  const snap = await usersRef.get();

  var users = [];
  snap.forEach((element) => {
    users.push(element.data());
  });

  res.render("Users", { users });
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  const usersRef = db.collection("users");

  const { name, tel } = req.body;

  if (tel) {
    await usersRef
      .doc(id)
      .update({
        tel: tel,
      })
      .then(() => {
        console.log("tel updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (name) {
    await usersRef
      .doc(id)
      .update({
        name: name,
      })
      .then(() => {
        console.log("name updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  res.send("Details Updated");
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const usersRef = db.collection("users");

  await usersRef
    .doc(id)
    .delete()
    .then(() => {
      console.log(`User with id ${id} deleted from the db`);
    })
    .catch((err) => {
      console.log(err);
    });

  res.send(`User with id ${id} deleted from the db`);
};

module.exports = { addUser, getAllUser, getOneUser, updateUser, deleteUser };
