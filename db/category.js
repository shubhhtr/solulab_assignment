const mongoose=require("mongoose");

const categorySchema= new mongoose.Schema({
    categoryName : String		// Category Name
});

module.exports=mongoose.model("category",categorySchema);