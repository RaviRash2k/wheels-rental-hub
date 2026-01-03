import multer from "multer";
import path from "path";

// Profile storage configuration
const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/profiles");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});


// Vehicle storage configuration
const VehicleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/vehicles");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb("Only images allowed!", false);
  }
};

// Profile upload middleware
const profileUpload = multer({
  storage: profileStorage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});

// Vehicle upload middleware
const vehicleUpload = multer({
  storage: VehicleStorage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});

export { profileUpload, vehicleUpload };