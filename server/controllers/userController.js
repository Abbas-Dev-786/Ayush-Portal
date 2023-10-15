const User = require("../models/userModel");
const factory = require("./factoryHandler");

module.exports.getAllUsers = factory.getAllDocs(User);

module.exports.getUser = factory.getDoc(User);

module.exports.updatetUser = factory.updateDoc(User);

module.exports.deletetUser = factory.deleteDoc(User);

module.exports.ImageUpload=factory.ImageUpload(User)

module.exports.setMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

module.exports.checkBody = (req, res, next) => {
  if (req.body.password) {
    return next(
      new AppError("Passwords could not be changed through this route", 400)
    );
  }

  next();
};
