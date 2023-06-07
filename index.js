const express = require('express');
const path = require("path");
const mongoose = require("mongoose");
const { upload } = require("./multer");
const controller = require("./controller");
const app = express();
const port = 3000;
const DBUri = "mongodb+srv://anupambera882:anupambera882@anupam.vqwwh4s.mongodb.net/FileUpload?retryWrites=true&w=majority";

app.use(express.json());
app.use(express.static(path.join(__dirname, "uploadDoc")));

app.post('/profile', upload.single('docFile'), controller.uploadFile);


mongoose.connect(DBUri, {

}).then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
        console.log("DB is connected successfully");
    })
}).catch((err) => {
    console.log(err.message);
})