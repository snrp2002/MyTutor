const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
      cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage});

let DP = "img/student.jpg";
app.get("/", (req, res)=>{
    res.render("StudentProfile",{DP: DP});
})
app.post("/updateDP", upload.single("profile_image"),(req, res)=>{
    DP = "uploads/"+req.file.filename;
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log(`Server started listening on port ${port}...`);
})