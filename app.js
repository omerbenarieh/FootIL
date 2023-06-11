const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");

app.get("/", (req, res) => {
  res.send("ROOT");
});

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is Running...");
  ///ilay test
});
