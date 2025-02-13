const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config(); //environment variables from .env file

connectDB(); //Database connection

const app = express();

//middleware setup
app.use(express.json());
app.use(cors());

//Start the server
app.listen(8080, () => {
  console.log("Server up and running");
});
