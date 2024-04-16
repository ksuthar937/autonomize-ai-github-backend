const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

const userRoutes = require("./src/routes/userRoute");

dotenv.config();
const app = express();

//Middleware
app.use(express.json());

//Routing
app.use("/", userRoutes);

//Datbase connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(colors.bgGreen("Database Connection Successfully"));
  })
  .catch(() => {
    console.log(colors.bgRed("Database Connection Failed"));
  });

app.listen(process.env.PORT, () => {
  console.log(colors.bgGreen(`Server listening on PORT ${process.env.PORT}`));
});
