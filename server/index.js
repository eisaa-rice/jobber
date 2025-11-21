// starts server, loads routes, sets up middleware
import "dotenv/config";
import express from "express";

import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();
const port = 3000; // frontend is 5173

app.use(express.json()); // auto-parses incoming requests that have json string payloads into a usable js obj

app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(`listening on port ${port}\n`);
});
