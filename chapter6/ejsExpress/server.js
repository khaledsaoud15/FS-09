const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", {
    user: "khaled",
    img: "https://i.pinimg.com/236x/bd/33/e0/bd33e0597439674c44519d7877ea33d4.jpg",
  });
});

app.listen(3000, () => {
  console.log("server is running");
});
