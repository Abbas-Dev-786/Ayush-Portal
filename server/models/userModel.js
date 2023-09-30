const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const crypto = require("crypto");

const ROLES = {
  user: "user",
  startup: "startup",
  investor: "investor",
  incubator: "incubator",
};

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "User must have firstName"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "User must have lastName"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "User must have enter a description"],
    },
    email: {
      type: String,
      trim: true,
      validate: [
        isEmail,
        "Email is not valid. Please enter valid email address",
      ],
      unique: [true, "User must have unique email address"],
      required: [true, "User must have email"],
    },
    emailVerifyToken: { type: String },
    password: {
      type: String,
      trim: true,
      select: false,
      minLength: [8, "Password should be atleast 8 characters long."],
      maxLength: [20, "Password should not exceed 20 characters."],
      required: [true, "User must have Password"],
    },
    passwordChangedAt: { type: Date },
    passwordResetToken: { type: String },
    passwordResetExpires: { type: Date },
    role: {
      type: String,
      enum: {
        values: Object.values(ROLES),
        message: `Role must be either ${Object.values(ROLES).join(", ")}.`,
        default: ROLES.user,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(mongoosePaginate);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.comparePasswords = async (enteredPassword, storedPassword) =>
  await bcrypt.compare(enteredPassword, storedPassword);

userSchema.methods.createHashToken = async function (key) {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this[key] = crypto.createHash("sha256").update(resetToken).digest("hex");
  if (key === "passwordResetToken") {
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  }

  await this.save({ validateBeforeSave: false });

  return resetToken;
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }

  // False means NOT changed
  return false;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
