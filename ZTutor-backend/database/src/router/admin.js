const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = new express.Router();
const Admin = require("../models/admin");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create student====================

router.post("/admins", function(req, res)
{
    const newadmin = new Admin(req.body);
    newadmin.save().then(function(result){
        res.redirect("/loginadmin");
    }).catch(function (err){
        res.render("warning");
    })
})

// delete student===============

router.delete("/admins/:id", function (req, res) {
    var id = req.params.id;
    Student.deleteOne({ _id: id }).then((res) => {
        
    }).catch((err) => {
        res.send(err);
    })
})

// update student==================

router.patch("/admins/:id", async function (req, res)
{
    const updates = Object.keys(req.body);
    const allowedUpdates = ["fullname", "phone", "gender", "dob", "city"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid Updates!" });
    }

    try {
        const updatedUser = await Admin.findById(req.params.id);
        updates.forEach((update) => updatedUser[update] = req.body[update]);
        await updatedUser.save();

        if (!updatedUser) {
            res.send("Admin not found in database");
        }
        res.send(updatedUser);
    }
    catch (error) {
        res.status(400).send(error);
    }

})





module.exports = router;