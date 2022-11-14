const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = new express.Router();
const Student = require("../models/student");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create student====================

router.post("/students", function(req, res)
{
    const newstudent = new Student(req.body);
    newstudent.save().then(function(result){
        res.redirect("/loginstudent");
    }).catch(function (err){
        res.render("warning");
    })
})

// delete student===============

router.delete("/students/:id", function (req, res) {
    var id = req.params.id;
    Student.deleteOne({ _id: id }).then((res) => {
        
    }).catch((err) => {
        res.send(err);
    })
})

// update student==================

router.patch("/students/:id", async function (req, res)
{
    const updates = Object.keys(req.body);
    const allowedUpdates = ["fullname", "phone", "gender", "dob", "city"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid Updates!" });
    }

    try {
        const updatedUser = await Student.findById(req.params.id);
        updates.forEach((update) => updatedUser[update] = req.body[update]);
        await updatedUser.save();

        if (!updatedUser) {
            res.send("Student not found in database");
        }
        res.send(updatedUser);
    }
    catch (error) {
        res.status(400).send(error);
    }

})





module.exports = router;