const obj = require("../data.json");
const { User } = require("../connection");

async function alluserGet(req, res) {
  const allUser = await User.find({});

  const data = allUser.map((userData) => {
    return userData;
  });
  return res.status(200).json({ data });
}
async function userCreate(req, res) {
  const { username, email, password } = req.body;
  if (
    !req.body ||
    !req.body.username ||
    !req.body.email ||
    !req.body.password
  ) {
    return res.status(400).json({
      error: "something is missing",
    });
  }
  await User.create({
    username,
    email,
    password,
  });
  return res.status(201).json({
    msg: "successfully create Account",
    name: `hello ${req.body.username}`,
  });
}
async function homeGet(req, res) {
  res.status(200).json({ status: "API is running" });
}
const ChannelGet = async (req, res) => {
  res.status(200).json(obj);
};
const createUser = async (req, res) => {
  res.status(200).json({ method: "post" });
};

async function userLogin(req, res) {}
async function userUpdate(req, res) {
  const { username, password } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    username: username,
    password: password,
  });
  return res.status(200).json({ msg: "update successfull" });
}

module.exports = {
  userLogin,
  homeGet,
  ChannelGet,
  createUser,
  userCreate,
  alluserGet,
  userUpdate,
};
