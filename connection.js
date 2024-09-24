const mongoose = require("mongoose");
const mongoUrl = process.env.DBHOST;

mongoose.connect(mongoUrl).then(console.log("mongodb con"));

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("uesr", userSchema);

module.exports = { User };
