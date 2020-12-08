const express = require("express");
const bodyparser = require("body-parser");
const router = require("./routes/Users.js");

const app = express();
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", router);

const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
