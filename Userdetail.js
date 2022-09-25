const mongoose = require("mongoose")
const Userdetail = mongoose.Schema({
    UserName : String,
    Email: String,
    Password: String,
    
})

//module.export = mongoose.model("users", "Userdetails")

module.exports = mongoose.model('users',  Userdetail);