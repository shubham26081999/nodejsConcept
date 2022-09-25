var procurd = requires("./ProductDetails.js")


//create a new Product
const ProductDetails = new ProductList({
    Name: req.body.name,
    Price: req.body.Price,
    Discription: req.body.Discription,
    Quantity: req.body.Quantity,
}) 

ProductDetails.save(ProductDetails).then(data=>{res.send(data )})

// update the product
const updateProduct = (_id) =>{
    const result = ProductDetails.findBYId({_id},{
        $set: {
            Name: "shubham",
            Quantity: 10,

        }
    })

}
// delete the products

const deleteProduct = (_id) =>{

    const result = ProductDetails.deleteOne({_id})

}


//find shubham products and sort in descending ordered
const results = ProductDetails
    .find({name: "shubham"}).sort({Price: -1});
    console.log(results)


