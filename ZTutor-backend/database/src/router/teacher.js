const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = new express.Router();
const Teacher = require("../models/teacher");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create student====================

router.post("/teachers", function(req, res)
{
    const newteacher = new Teacher(req.body);
    newteacher.save().then(function(result){
        res.redirect("/loginteacher");
    }).catch(function (err){
        res.render("warning");
    })
})

// delete student===============

router.delete("/teachers/:id", function (req, res) {
    var id = req.params.id;
    Teacher.deleteOne({ _id: id }).then((res) => {
        
    }).catch((err) => {
        res.send(err);
    })
})

// update student==================

router.patch("/teachers/:id", async function (req, res)
{
    const updates = Object.keys(req.body);
    const allowedUpdates = ["fullname", "phone", "gender", "dob", "city"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid Updates!" });
    }

    try {
        const updatedUser = await Teacher.findById(req.params.id);
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