const express = require("express");
const router = require("./routes/job");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
// console.log(process.env.DB_USERNAME,process.env.DB_PASSWORD);

const server = express();

server.use(express.json());

mongoose
  .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ugkcmbj.mongodb.net/`)
  .then(() => {
    console.log("databasde connect successfully");
  })
  .catch((err) => {
    console.log("database connection failed", err);
  });

server.use("/api/v1/job/", router);
const port = 10000;
server.listen(port, () => {
  console.log("server is up and running on port 1000");
});
