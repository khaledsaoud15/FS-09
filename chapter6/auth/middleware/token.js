const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const jwtToken = req.headers.token;

  if (jwtToken) {
    const token = jwtToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (user.user._id === req.params.id) {
        req.user = user;
        next();
      } else {
        res.status(403).json("you are not him");
      }
    });
  } else {
    return res.status(401).json("you are not autherized");
  }
};

const verifyAdmin = (req, res, next) => {
  const jwtToken = req.headers.token;

  if (jwtToken) {
    const token = jwtToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
      if (user.user.isAdmin === true) {
        req.user = user;
        next();
      } else {
        res.status(403).json("you are not him");
      }
    });
  } else {
    return res.status(401).json("you are not autherized");
  }
};

module.exports = { verifyUser, verifyAdmin };
