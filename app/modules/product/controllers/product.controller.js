

const productRepo = require("../repositories/product.repository");

const categoryModel = require("../../catagory/models/catagory.model");
const sub_categoryModel = require("../../sub_catagory/models/subCatagory.model");
const product_model = require("../models/product.model");

const getProductPage = async(req,res)=>{
    try {
        const category = await productRepo.getAll(categoryModel);
        const sub_category = await productRepo.getAll(sub_categoryModel);
        const product = await productRepo.getAll(product_model);
        
        res.render('product/views/productPage.ejs',{
            page_title : "Products",
            product:product,
            sub_category: sub_category,
            category: category,
        })
    } catch (e) {
        throw e ;
    }
}
const addProduct = async(req,res)=>{
    try {
        const {product_name,cat_id,category,sub_id,sub_category} = req.body;
        const newProduct_model = new product_model({
            product_name: product_name,
            cat_id : cat_id,
            category : category,
            sub_id : sub_id,
            sub_category :sub_category
        })
        const product_data = await productRepo.save(newProduct_model);
        res.redirect('/products/base')
    } catch (e) {
        throw e ;
        
    }
}

const getProductUpdate_page = async(req,res)=>{
    try {
        const {id} = req.params ;
        const updated_product = await productRepo.getById(id);
        res.render('product/views/productUpdatePage.ejs',{
            page_title : "Update Product",
            response : updated_product,
        })
    } catch (e) {
        throw e ;
    }
}
const updateProduct =async (req,res)=>{
    try {
        const {id} =req.params ;
        const {product_name, category,sub_category} = req.body ;
        const updated_product = await productRepo.update(id,({product_name,category,sub_category}));
        res.redirect('/products/base');
    } catch (e) {
        throw e ;
    }
}
const deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params ;
        const deleted_product = await productRepo.delete(id);
        res.redirect('/products/base');
    } catch (e) {
        throw e ;
    } 
}


  

module.exports= {
    getProductPage,
    addProduct,
    getProductUpdate_page,
    updateProduct,
    deleteProduct
    
}

