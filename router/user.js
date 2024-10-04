const express = require("express");
const router = express.Router();
const {
  userLogin,
  alluserGet,
  userUpdate,
  homeGet,
  ChannelGet,
  createUser,
  playlistlGet,
  userCreate,
} = require("../router_controller/controller");

router.get("/api/user", alluserGet);
router.post("/api/user/signup", userCreate);
router.route("/api/user/:id").post(userLogin).patch(userUpdate);
router.get("/", homeGet);
router.get("/api/v1/channels", ChannelGet);
router.get("/playlist/master.m3u", playlistlGet);

module.exports = router;
