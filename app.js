const express = require("express");
const app = express();
const sendMail = require("./Controllers/sendMail");

app.get("/", (req, res) => {
  res.send("Hello Mother Father I am back");
});

app.get("/mail", sendMail);

const start = () => {
  app.listen(3000, () => {
    console.log(`Server is running on port http://localhost:3000`);
  });
};

start();
