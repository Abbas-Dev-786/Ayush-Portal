const express = require("express");
const authController = require("../controllers/authController");
const { upload } = require("../utils/cloudinary");
const cloudinary=require("cloudinary").v2
const catchAsync = require("../utils/catchAsync");


const router = express.Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/verifyEmail/:token", authController.verifyEmail);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.post("/image",upload.single("/image"),catchAsync(async (req, res) => {
  console.log(req.body);
  const image=await cloudinary.uploader.upload(req.body?.file)
  return res.json({ image:image });
}))

router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);

module.exports = router;
