require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const postRoutes = require("./routes/Routes");
const userRoutes = require("./routes/userRoutes");


const app = express();
connectDB();


app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.use(express.json());


app.use("/api", postRoutes);
app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});