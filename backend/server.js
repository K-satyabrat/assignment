const express = require("express");
const dotenv = require("dotenv");
const configurationRoutes = require("./routes/configurationRoutes");
const connectDB = require("./config/connectDb");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api", configurationRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
