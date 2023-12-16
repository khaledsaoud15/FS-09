const { verifyUser } = require("../middleware/token");
const { register, login, update } = require("../routes/user.router");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.put("/login/:id", verifyUser, update);

module.exports = router;
