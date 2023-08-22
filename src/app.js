const express = require("express");
const router = require("./router/router");
const cors = require("cors");
require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.listen(5000, () => {
  console.log("listening on port 5000");
});