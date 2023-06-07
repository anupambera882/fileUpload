const multer = require('multer');
const path = require('path');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, 'uploadDoc'));
        },
        filename: function (req, file, cb) {
            const filename = Date.now() + '-' + file.originalname;
            cb(null, filename);
        }
    }),
    limits: {
        fieldNameSize: 300,
        fieldSize: 1048576,
        fields: 1,
        fileSize: 1048576,
        files: 1,
        // parts,
        // headerPairs
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .pdf, .doc and .docx format allowed!'));
        }
    }
});

module.exports = { upload };