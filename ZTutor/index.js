const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



//-------------------- Admin Section --------------------//
let aDetails = {name:"Souvik Naskar", gender:"Male", DOB:'2002-11-14', email:"snrp2002@gamil.com", 
    mobile_no:9875571304, city:"Kolkata"};  
let aDP = "images/admin/admin.png";
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
    res.render("admin/aSettings",{aDP: aDP, aDetails: aDetails});
})
app.get("/aAnnouncements",(req, res)=>{
    res.render("admin/aAnnouncements",{aDP: aDP, aDetails: aDetails, aAnnouncements: aAnnouncements});
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
let sDetails = {name:"Souvik Naskar", gender:"Male", DOB:'2002-11-14', email:"snrp2002@gamil.com", 
                        mobile_no:9875571304, city:"Kolkata", class:"12+", board:"WestBengal"};
let sDP = "images/student/student.jpg";
app.get("/sProfile",(req, res)=>{
    res.render("student/sProfile",{sDP:sDP, sDetails: sDetails});
})

app.post("/sProfileUpdate",(req, res)=>{
    if(req.body.update=="true"){
        sDetails = req.body;
        res.redirect("/sProfile");
    }else{
        res.redirect("/sProfile");
    }
})
app.get("/sSettings",(req, res)=>{
    res.render("student/sSettings",{sDP:sDP, sDetails: sDetails});
})
app.post("/sSettingsPasswordUpdate", (req, res)=>{
    console.log(req.body);
    res.redirect("/sProfile");
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}.`);
});