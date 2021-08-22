const Category = require ("../models/category");


exports.getCategoryById = (req,res,next,id) => {

    Category.findById(id).exec((err,cate) => {
        if(err){
            res.status(400).json({
                error:"Category not found in DB"
            });
        }
        else{
            req.category=cate;
        }
        next();
    })
};


exports.createCategory = async (req,res) => {
    console.log(req.body);
    const categoryExists = await Category.findOne(req.body) 

    if(categoryExists){
        res.status(400).json({
            error:req.body.category_name + " Already Exists" 
        })
    }
    else{
    const category = new Category(req.body);
    category.save((err,category) => {
        if(err){
            res.status(400).json({
                error:"Failed to create Category :- " + category
            });
        }
    
            res.json(category);
        
    });
   }
};

exports.getAllCategory =(req,res ) => {
        
    Category.find().exec((err , categories) => {
        if(err) {
           return res.status(400).json({
               error: "No categories found"
           });
       }
       res.json(categories);
    })
};

exports.getCategory = (req,res) => {
    return res.json(req.category);
};

exports.updateCategory =  (req,res) => {

    Category.findByIdAndUpdate({_id :req.params.categoryId},{category_name :req.body.category_name ,
    status : req.body.status},{useFindAndModify: false},  function(err, result){

        if(err){
            res.status(400).json(err)
        }
        else{
            res.status(200).json(result);
        }

    })
};


exports.removeCategory = (req,res) => {

    const category = req.category;

    category.remove((err,RemovedCategory) => {
        if(err){
            res.status(400).json({
                error:"Failed to Remove/Delete Category :- " + RemovedCategory
            })
        }
        else {
            res.json(
                {Message : "Category Removed Successfully :- " + RemovedCategory.name}
                ) 
        }
    })
}

