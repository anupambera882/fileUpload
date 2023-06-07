const docModel = require('./model');
class Controller {
    static uploadFile = async (req, res) => {
        try {
            // console.log(req.file);
            const { filename, path } = req.file;
            const newFileData = docModel({
                fileName: filename,
                filePath: path
            });
            const saveData = await newFileData.save();
            res.json({
                message: "You successfully upload doc file",
                data: saveData
            })
        } catch (err) {
            return res.json({
                message: err.message
            })
        }

    }

    static getFileById = async (req, res) => {
        
    }
}

module.exports = Controller;