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

let StudentDP = "img/student.jpg";
app.get("/StudentProfile", (req, res)=>{
    res.render("StudentProfile",{StudentDP: StudentDP});
})
app.post("/updateStudentDP", upload.single("profile_image"),(req, res)=>{
    StudentDP = "uploads/"+req.file.filename;
    res.redirect("/StudentProfile");
})

app.listen(port, ()=>{
    console.log(`Server started listening on port ${port}...`);
})