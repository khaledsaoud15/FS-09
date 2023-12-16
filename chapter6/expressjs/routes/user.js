const router = require("express").Router();

router.get("/user", (req, res) => {
  res.send({ username: "khaled", email: "khaledsaoud@gmail.com" });
  res.end();
});

module.exports = router;
