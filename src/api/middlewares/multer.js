const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, "petImages");
    },
    filename(req, file, cb) {
        const userId = req.userId;
        const ext = path.extname(file.originalname);
        const filename = userId + "_" + Date.now() + ext;
        cb(null, filename);
    },
});

const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
        cb(null, false);
    } else {
        cb(null, true);
    }
};

const uploadImage = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 },
}).single("img");

module.exports = { uploadImage };
