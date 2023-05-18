
const Product = require("../models/product.model");
const SubCategory = require("../../sub_catagory/models/subCatagory.model")


const productRepository = {
    save: async (data) => {
      try {
        let product = await Product.create(data);
  
        if (product) {
          return product;
        } else {
          return null;
        }
      } catch (error) {
        throw error;
      }
    },
    update: async ( id,data) => {
      // console.log( typeof data);
      try {
          const updatedProduct = await Product.findByIdAndUpdate(
              id, 
              data, 
              { new: true }
            );
            
            return updatedProduct;
      } catch (error) {
        throw error;
      }
    },
    delete: async (id) => {
      try {
        let product = await Product.findByIdAndRemove(id);
        if (product) {
          return product;
        } else {
          return null;
        }
      } catch (error) {
        throw error;
      }
    },
    getAll :async(model)=>{
      try {
          let allProduct = await model.find()
      if(!allProduct){
          return null ;
      }
      return allProduct;
      } catch (error) {
          throw error ;
      }
    },
  
    getById :async(id)=>{
      try {
        let product =await Product.findById(id);
        if(!product){
          return null;
        }
        return product ;
      } catch (e) {
        throw e ;
      }
    },
    fetchById : async(id)=>{
        try {
            let sub_catagory = await SubCategory.findById({catagory : id})
            if(!sub_catagory){
                return null ;
            }
            return sub_catagory;
        } catch (e) {
            throw e ;
        }
    }

} 
   
module.exports = productRepository;