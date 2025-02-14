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

const PORT = process.env.PORT || 5000;

//Routes
app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/users", userRoutes);

//Start the server
app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});
