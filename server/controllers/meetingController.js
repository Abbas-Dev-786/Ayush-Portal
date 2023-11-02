const Meeting = require("../models/meetingModel");
const dayjs = require("dayjs");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const { generateToken04 } = require("../utils/generateMeetingToken");
const factory = require("./factoryHandler");

module.exports.createMeeting = factory.createDoc(Meeting);

module.exports.getMeeting = factory.getDoc(Meeting);

module.exports.getAllMeetings = factory.getAllDocs(Meeting);

module.exports.deleteMeeting = factory.deleteDoc(Meeting);

module.exports.joinMeeting = catchAsync(async (req, res, next) => {
  const meeting = await Meeting.findById(req.params.id);

  if (!meeting) {
    return next(new AppError("Meeting does not exists", 404));
  }

  const meetingTime = dayjs(meeting.startTime);
  const diff = meetingTime.diff(dayjs(), "h");
  if (diff > 2 || diff < 0) {
    return next(new AppError("Meeting Expired", 400));
  }

  const token = generateToken04(String(req.user._id));
  
  res.status(200).json({
    status: "success",
    data: {
      token,
      meetingId: meeting._id,
    },
  });
});
