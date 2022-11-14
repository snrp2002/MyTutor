require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mytutor", {useNewUrlParser:true, useUnifiedTopology:true});