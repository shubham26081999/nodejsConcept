const mongoose = require("mongoose")
const ProductsDetails = mongoose.Schema({
    Name : String,
    Price: Number,
    Discription: String,
    Quantity: Number
    
})
//module.export = mongoose.model("products", "ProductDetails")
module.exports = mongoose.model('products', ProductsDetails);