const express = require("express");
const router = require("./routes/job");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()

const server = express();

server.use(express.json());

mongoose
  .connect(`mongodb+srv://namisha_gurunani08:8bxdUEsSg3TKegIx@cluster0.bdb4odh.mongodb.net/`)
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
