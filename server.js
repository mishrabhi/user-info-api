const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config(); //environment variables from .env file

connectDB(); //Database connection

const app = express();

//middleware setup
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users", userRoutes);

//Start the server
app.listen(8080, () => {
  console.log("Server up and running");
});
