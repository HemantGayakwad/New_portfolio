const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate)
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
});

app.get("/",(req,res)=>{
    res.render("home.ejs");
});