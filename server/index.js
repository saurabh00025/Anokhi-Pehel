const express = require("express");
require("colors");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const path = require("path");
dotenv.config();
const PORT = process.env.PORT;
const mongoDB = require("./config/db");
const router = require("./routers");
mongoDB();

// const corsOptions = {
//   origin: 'https://anokhi-pehel-mnnit.vercel.app',
//   optionsSuccessStatus: 200
// };

app.use(cors());

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://anokhi-pehel-backend-lemon.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE" // Include DELETE here
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());
app.use("/images", express.static("images"));

// Routes
app.use("/api/v1/user", router);

// Serve your static files from the Vite build
app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`.bgCyan.white);
});
