const express= require('express');
const app = express();
const ejs = require("ejs") 
const mongoose = require ("mongoose")

const routes = require('./routes/main')
const bodyParser = require('body-parser')

//const ProductD = require("./models/ProductDetails")
const Userdetail = require("./models/Userdetail");
const ProductDetails = require('./models/ProductDetails');
const flash = require('express-flash');

app.use('', routes)
// ejs template engine setup

app.set('view-engine', 'ejs')
app.set ("views", "views")


//url body

app.use(bodyParser.urlencoded({ extended: false }));


// db 
mongoose.connect("mongodb://localhost/NodeProject", ()=>{
    console.log("db connected")

})
ProductDetails.create({
    Name: "Abc",
    Price: "25",
    Discription: "bdjfb jwbdd kwdwj",
    Quantity: 10

})

/*Userdetail.create({

    UserName: "shubham",
    Email: "shubham.pithadiya007@gmail.com",
    Password: "ssbksa"
})*/

// data from html to  mongo
/*
const Userdetail = mongoose.Schema({
    UserName : String,
    Email: String,
    Password: String,
    
})
*/
app.post("/", (req, res)=>{

    let newusers = new Userdetail({
        UserName: req.body.name,
        Email: req.body.email,
        Password: req.body.password

    })
    newusers.save()
    res.redirect("/")
})


// diplay mongoose data to html
app.use(flash)

app.get("/portal", (req, res)=>{
    ProductDetails.find({}, function (err,products){
        res.render('portal',{
            productlist:products 
        })
    } )   

}) 
//Curd operations



// login


app.listen(process.env.PORT | 4000, () =>{
    console.log(' server listening on port ');
});
