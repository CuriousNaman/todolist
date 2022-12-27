const express = require("express");
const bodyParser = require("body-parser");
// const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set('view engine','ejs');
var items = ["Buy food","Cook food","Eat food"];
var workItems = [];

app.get("/",function(req,res){
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }
  var naman = new Date().toLocaleDateString("eng-US",options);
  res.render("list",{listTitle: naman, kinds: items} );
})

  app.post("/", function(req,res){
    var item = req.body.newItem;
    var soni= req.body.newItem;
    if(req.body.list === "Work"){
      workItems.push(soni);
      res.redirect("/work");
    }
    else{
      items.push(item);
      res.redirect("/");
    }
    })

  //Work ListTitle
  app.get("/work",function(req,res){
    res.render("list",{listTitle: "Work list", kinds: workItems})
  });
  app.get("/about",function(req,res){
    res.render("about");
  });

app.listen(3000, function(){
  console.log("Server is running")
})