const express = require("express");
const authController = require("./../controllers/authController");
const meetingController = require("./../controllers/meetingController");

const router = express.Router();

router.use(authController.protect);

router.get("/join/:id", meetingController.joinMeeting);

router
  .route("/")
  .get(meetingController.getAllMeetings)
  .post(meetingController.createMeeting);

router
  .route("/:id")
  .get(meetingController.getMeeting)
  .patch(meetingController.deleteMeeting);

module.exports = router;
