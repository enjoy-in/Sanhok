const express = require("express");
const { sequelize } = require("./models");
const logger = require("morgan");
const cors = require("cors");

const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(logger("dev"));
app.use("/", require("./routes"));

app.set("jwt-secret", process.env.JWT_SECRET);

sequelize.sync();

app.listen(8000, () => {
  console.log("Server On");
});
