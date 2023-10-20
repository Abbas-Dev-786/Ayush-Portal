const express = require("express");
const authController = require("./../controllers/authController");
const {
  getAllChats,
  createMessage,
  getChat,
} = require("../controllers/messageController");

const router = express.Router();

router.use(authController.protect);

router.route("/").get(getAllChats);

router.route("/:id").get(getChat);

router.route("/").post(createMessage);

module.exports = router;
