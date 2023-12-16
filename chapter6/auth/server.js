const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./controllers/user.controller");

app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.use("/", userRouter);

app.listen(port, () => {
  console.log("server is running " + port);
});
