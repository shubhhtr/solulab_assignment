const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    productName:String,
    qtyPerUnit : Number,		// Quantity of the Product
    unitPrice : Number,			// Unit Price of the Product
    unitInStock : Number,		// Unit in Stock
    discontinued : Boolean,		// Boolean (yes/no)
    categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
})

module.exports=mongoose.model("products",productSchema);