const multer = require("multer");
const path = require("path");

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, "petImages");
        },
        filename(req, file, cb) {
            const userId = req.userId;
            const ext = path.extname(file.originalname);
            const filename = userId + "_" + Date.now() + ext;
            cb(null, filename);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadImage = upload.single("img");

module.exports = { uploadImage };
