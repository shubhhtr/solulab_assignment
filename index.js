const express=require("express");
const cors=require("cors");
const Category=require("./db/category");
const Product=require("./db/products");
const app=express();

app.use(express.json());
app.use(cors());

//READ ALL THE PRODUCTS AND THEIR CATEGORIES

app.get("/readAll", async (re,resp)=>{
    let result=await Product.find().populate("categoryId");
    if(result.length > 0){
        resp.send(result);
    }
    else{
        resp.send({result:"No products found"});
    }
});



//READ ONE PRODUCT ACCORDING TO THE PRODUCT NAME

app.get("/read:name", async (req, resp)=>{
    const result = await Product.findOne({productName:req.params.name}).populate("categoryId");
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"No such record found"});
    }
});



//DELETE ONE PRODUCT ACCORDING TO THE PRODUCT ID PROVIDED

app.delete("/delete/:id",async (req,resp)=>{
    
    const result=await Product.deleteOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"Item not found"});
    }
});



//INSERTING NEW RECORDS

app.post("/create", async (req,resp)=>{

    let newcategory= new Category({
        categoryName: req.body.categoryname
    });
    const category=await newcategory.save();

    let product= new Product({
        productName:req.body.productName,
        qtyPerUnit : req.body.qtyPerUnit,		
        unitPrice : req.body.unitPrice,			
        unitInStock : req.body.unitInStock,		
        discontinued : req.body.discontinued,
        categoryId : category._id
    });
    const result=await product.save();
    resp.send(result);

});



//UPDATES ONE PARTICULAR PRODUCT ACCORDING TO THE PRODUCT ID

app.put("/update/:id", async (req,resp)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    );
    resp.send(result);
});


app.listen(5000);