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





app.listen(5000);