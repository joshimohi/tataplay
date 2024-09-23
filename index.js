const express = require("express");
const app = express();
const router = require("./user.js");
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(router);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`conncted ${PORT}`);
    });
  } catch (error) {
    console.log("error", error);
  }
};
start();
