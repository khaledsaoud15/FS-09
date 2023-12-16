const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const jwtToken = req.headers.token;

  if (!jwtToken) {
    return res.status(404).json({ message: "invalid TOKEN" });
  }

  jwt.verify(jwtToken, process.env.JWT_KEY, (err, encoded) => {
    req.user = encoded;
    next();
  });
};

module.exports = { verifyUser };
