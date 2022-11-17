const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



//-------------------- Admin Section --------------------//
let aAnnouncements = []
app.get("/aProfile",(req, res)=>{
    res.render("admin/aProfile");
})
app.get("/aVerify",(req, res)=>{
    res.render("admin/aVerify");
})

app.post("/aProfileUpdate",(req, res)=>{
    if(req.body.update=="true"){
        aDetails = req.body;
        res.redirect("/aProfile");
    }else{
        res.redirect("/aProfile");
    }
})
app.get("/aSettings",(req, res)=>{
    res.render("admin/aSettings");
})
app.get("/aAnnouncements",(req, res)=>{
    res.render("admin/aAnnouncements");
})
app.post("/aSettingsPasswordUpdate", (req, res)=>{
    console.log(req.body);
    res.redirect("/aProfile");
})

app.post("/aAnnouncementUpdate", (req, res)=>{
    const notif = {subject: req.body.subject, body: req.body.body, date: new Date().toLocaleDateString("en-US")};
    aAnnouncements.unshift(notif);
    res.redirect("/aAnnouncements");
})



//-------------------- Student Section --------------------//
app.get("/sProfile",(req, res)=>{
    res.render("student/sProfile");
})
app.get("/sSettings",(req, res)=>{
    res.render("student/sSettings");
})
app.get("/sClassroom",(req, res)=>{
    res.render("student/sClassroom");
})
app.get("/sCourse",(req, res)=>{
    res.render("student/sClassroomContent");
})
app.get("/sInvite",(req, res)=>{
    res.render("student/sInvite");
})


//------------------------- Teacher Section -------------------------//
app.get("/tProfile",(req, res)=>{
    res.render("teacher/tProfile");
})
app.get("/tBatch",(req, res)=>{
    res.render("teacher/tBatch");
})
app.get("/tSettings",(req, res)=>{
    res.render("teacher/tSettings");
})
app.get("/tInvite",(req, res)=>{
    res.render("teacher/tInvite");
})






app.listen(port,()=>{
    console.log(`Server is listening on port ${port}.`);
});