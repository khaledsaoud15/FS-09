const { verifyUser, verifyAdmin } = require("../middleware/token");
const { register, login, update, deletUser } = require("../routes/user.router");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.put("/login/:id", verifyUser, update);
router.delete("/delete/:id", verifyAdmin, deletUser);

module.exports = router;
