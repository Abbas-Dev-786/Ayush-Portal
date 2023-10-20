const mongoose = require("mongoose");

const meetingModel = new mongoose.Schema(
  {
    roomId: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Room id is mandatory"],
    },
    host: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "host id is mandatory"],
    },
    attendee: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "attendee id is mandatory"],
    },
    startTime: {
      type: Date,
      required: [true, "start time is mandatory"],
    },
  },
  { timestamps: true }
);

const Meeting = mongoose.model("Meeting", meetingModel);

module.exports = Meeting;
