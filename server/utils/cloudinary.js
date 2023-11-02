const cloudinary=require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name:"dfccipzwz",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
      folder:"Profile_Images"
    }
})

const upload=multer({storage:storage,
  fileFilter: (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    cb(new Error("Unsupported file type!"), false);
    return;
  }
  cb(null, true);
},})

module.exports={upload,storage}