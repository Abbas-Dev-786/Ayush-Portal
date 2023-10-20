const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    to: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    from: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
      required: [true, "Message cannot be null"],
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
