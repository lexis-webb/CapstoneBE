const PORT = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL);


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Express App is running")
});

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file, fieldname}_${Date.now()}${path.
            extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req,res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
