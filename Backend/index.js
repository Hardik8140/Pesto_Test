const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./db");
const { taskRoutes } = require("./routes/task.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Welcome to the Homepage" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

app.use("/task", taskRoutes);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the db");
    console.log(`Server running on the port `);
  } catch (error) {
    console.log(error);
  }
});
