const Product = require("../models/product");

const Category = require("../models/category");
const { isValidObjectId } = require("mongoose");

exports.getProductById = (req,res,next,id) => {
    Product.findById(id)
    .populate("category") 
    .exec((err , product) => {
        if(err){
            return res.status(400).json({
                error:"Product not found"
            })
        }
        req.product = product;
        next();
    })
};


exports.createProduct = async (req,res) => {
    const product = new Product(req.body);
  await product.save((err,product) => {
      console.log(product)
        if(err){
            res.status(400).json({
                error:"Failed to create Category :- " + product
            });
        }
            res.json(product);
    });
    
};

exports.getProduct = (req,res) => {

    return res.json(req.product);
};


exports.updateProduct = (req,res) => {
                 console.log(req.body);
                Product.updateMany(
                    {_id:req.body.category_id},
                    {$set : {product_name : req.body.product_name,
                        price : req.body.price,
                        quantity : req.body.quantity,
                        category_id : req.body.category_id}},
                    (err ,updatedProduct) => {
                        if(err){
                            return res.status(400).json({
                                error:"Failed to updtae order status in DB"
                            })
                        }
                        res.json(updatedProduct);
                    });
            };

exports.removeProduct = (req, res ) =>
   {
       Product.deleteOne(_id= req.params.id).then(
           
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );

     };
            

            
exports.getAllProducts =(req,res ) => {
      Product.find().exec((err , products) => {
          if(err) {
             return res.status(400).json({
                 error: "No products found"
             });
         }
         res.send({products});
      })
 };


 exports.getProductsByCategory =  async(req,res ) => {

    console.log(req.params.categoryId);
  try { const availableProducts = await Product.find( {category_id :req.params.categoryId }).sort({product_name : "asc"})
    return res.json({availableProducts})}
    catch{res.json({error : "errorrrrrr"})}
 };