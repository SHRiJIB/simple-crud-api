const { db } = require("../firebase/config.js");

const { v4 } = require("uuid");

const addUser = async (req, res) => {
  const user = req.body; //data coming from user input
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

const goToEditPage = async (req, res) => {
  const { id } = req.params;
  const usersRef = db.collection("users");
  const snap = await usersRef.get();
  var user;
  snap.forEach((u) => {
    if (u.data().id == id) user = u.data();
  });

  res.render("EditPage", { user });
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

      .catch((err) => {
        console.log(err);
      });
  }
  res.redirect("/user");
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const usersRef = db.collection("users");

  await usersRef
    .doc(id)
    .delete()

    .catch((err) => {
      console.log(err);
    });

  res.redirect("/user");
};

module.exports = {
  goToEditPage,
  addUser,
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
};
