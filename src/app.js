const express = require("express");
require("./config/database");
const router = require("./router/router");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.listen(5000, () => {
  console.log("listening on port 5000");
});