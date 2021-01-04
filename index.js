const express = require("express");
const bodyparser = require("body-parser");
const router = require("./routes/Users.js");
const path = require("path");
const app = express();
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("static"));
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", router);
app.use("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.render("random", { rand: num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
