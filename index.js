const express = require("express");
const app = express();
const router = require("./router/user");
const PORT = process.env.PORT || 5000;

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
