const express = require("express");

const app = express();

const userRouter = require("./routes/user");

app.use(express.json());

// CREATE 3 routes 1=> user / send some user data .... 2=>products /send some product data .....3=>allUsers / send some users data

app.use("/", userRouter);

app.listen(3000, () => {
  console.log("server is running");
});
