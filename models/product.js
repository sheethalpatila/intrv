const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema({
    
    product_name:{
        type:String,
        trim:true,
        maxlength:32,
        required:true
    } ,
    price:{
        type:Number,
        required:true,
        trim:true
    },
    quantity:{
        type:Number,
        required:true
    },
    category_id:{
        type:ObjectId,
        ref:"Category",
        required:true
    },

}
   ,{timestamps:true}

);

module.exports = mongoose.model("Product" , productSchema);