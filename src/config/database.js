const { connect } = require("mongoose");

const URI =
  "mongodb+srv://juan25257:yGqsP2elfq8YW0vx@cluster0.rpo6mo5.mongodb.net/?retryWrites=true&w=majority";

const conectDataBase = () => {
  connect(URI)
    .then(() => {
      console.log("Connect success to database");
    })
    .catch(() => {
      console.log("Error connecting to database");
    });
};

conectDataBase();
