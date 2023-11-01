const ApiFeature = require("../utils/ApiFeatures");
const catchAsync = require("../utils/catchAsync");

module.exports.getAllDocs = (Model) =>
  catchAsync(async (req, res, next) => {
    const features = new ApiFeature(Model.find(), req.body)
      .filter()
      .limitFields()
      .sort();

    const docs = await Model.paginate(features.query, {
      page: req.query.page || 1,
      limit: req.query.limit || 40,
    });

    res.status(200).json({ status: "success", data: docs });
  });

module.exports.getDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return next(new AppError("Doc does not exists", 404));
    }

    res.status(200).json({ status: "success", data: doc });
  });

module.exports.deleteDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("Doc does not exists", 404));
    }

    res.status(204).json({ status: "success" });
  });

module.exports.updateDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!doc) {
      return next(new AppError("Doc does not exists", 404));
    }

    res.status(200).json({ status: "success", data: doc });
  });

module.exports.createDoc = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(200).json({ status: "success", data: doc });
  });

module.exports.ImageUpload = (Model) =>
  catchAsync(async (req, res) => {
      console.log(req.file);
      return res.json({ image: req.file.path });
    })
 
