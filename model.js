const mongoose = require('mongoose');

const docSchema = mongoose.Schema({
    fileName: { type: String, required: true },
    filePath: { type: String, required: true }
});

module.exports = mongoose.model("doc", docSchema);