const multer = require("multer");
const path = require("path");
const { template } = require("../helpers/ResponseFormat");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    // let datetimestamp = Date.now();
    cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname);
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
    return cb(new Error("Only images are allowed"));
  }
  cb(null, true);
};

const limit = {
  fileSize: 10000000,
};

const config = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: limit,
});

exports.upload = (req, res, next) => {
  const uploads = config.single("images");
  uploads(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.status(400).send(template("Upload error!", 400, {}, err.message));
    } else if (err) {
      res.status(400).send(template("Upload error!", 400, {}, err.message));
    } else if (req.file === undefined) {
      next();
    } else {
      next();
    }
  });
};
