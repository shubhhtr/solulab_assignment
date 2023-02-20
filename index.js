const express=require("express");
const cors=require("cors");
const Category=require("./db/category");
const Product=require("./db/products");
const app=express();

app.use(express.json());
app.use(cors());


app.get("/readAll", async (re,resp)=>{
    let result=await Product.find().populate("categoryId");
    if(result.length > 0){
        resp.send(result);
    }
    else{
        resp.send({result:"No products found"});
    }
});



app.get("/read:name", async (req, resp)=>{
    const result = await Product.findOne({productName:req.params.name}).populate("categoryId");
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"No such record found"});
    }
});



app.delete("/product/:id",async (req,resp)=>{
    
    const result=await Product.deleteOne({_id:req.params.id});
    if(result){
        resp.send(result);
    }
    else{
        resp.send({result:"Item not found"});
    }
});



app.post("/create", async (req,resp)=>{

    let product= new Product(req.body);
    const result=await product.save();
    resp.send(result);

});




app.listen(5000);