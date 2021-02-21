const express = require("express");
const bodyparser = require("body-parser");
const router = require("./routes/Users.js");
const methodOverride = require("method-override");
const path = require("path");

const app = express();

app.use(bodyparser.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.use(express.static("static"));

app.use(methodOverride("_method"));
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", router);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
