const Message = require("../models/messageModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/AppError");
const mongoose = require("mongoose");

module.exports.getAllChats = catchAsync(async (req, res, next) => {
  const currentUser = new mongoose.Types.ObjectId(req.user._id);

  const chats = await Message.aggregate([
    {
      $match: {
        $or: [{ to: currentUser }, { from: currentUser }],
      },
    },
    {
      $addFields: {
        senderId: {
          $cond: [{ $eq: ["$from", currentUser] }, "$to", "$from"],
        },
      },
    },
    {
      $sort: { createdAt: -1 },
    },
    {
      $group: {
        _id: "$senderId",
        message: { $last: "$message" },
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "_id",
        pipeline: [
          {
            $project: {
              firstName: 1,
              lastName: 1,
              email: 1,
              role: 1,
              description: 1,
            },
          },
        ],
        as: "user",
      },
    },
    {
      $unwind: "$user",
    },
    {
      $sort: { createdAt: -1 },
    },
  ]);

  res
    .status(200)
    .json({ status: "success", results: chats.length, data: chats });
});

module.exports.getChat = catchAsync(async (req, res, next) => {
  const currentUser = new mongoose.Types.ObjectId(req.user._id);
  const user = new mongoose.Types.ObjectId(req.params.id);

  const chats = await Message.aggregate([
    {
      $match: {
        $or: [
          { $and: [{ from: currentUser, to: user }] },
          { to: currentUser, from: user },
        ],
      },
    },
  ]);

  res
    .status(200)
    .json({ status: "success", results: chats.length, data: chats });
});

module.exports.createMessage = catchAsync(async (req, res, next) => {});
