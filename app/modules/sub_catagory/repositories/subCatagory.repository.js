const subCatagory = require("../models/subCatagory.model");

const SubCatagoryRepository = {
    save: async (data) => {
        try {
          let sub_catagory = await subCatagory.create(data);
    
          if (sub_catagory) {
            return sub_catagory;
          } else {
            return null;
          }
        } catch (error) {
          throw error;
        }
      },
      getAll :async(model)=>{
        try {
            let allSubCatagory = await model.find()
        if(!allSubCatagory){
            return null ;
        }
        return allSubCatagory;
        } catch (error) {
            throw error ;
        }
      },
      delete: async (id) => {
        try {
          let subcatagory = await subCatagory.findByIdAndRemove(id);
          if (subcatagory) {
            return subcatagory;
          } else {
            return null;
          }
        } catch (error) {
          throw error;
        }
      },
      getById :async(id)=>{
        try {
          let sub_data =await subCatagory.findById(id);
          if(!sub_data){
            return null;
          }
          return sub_data ;
        } catch (e) {
          throw e ;
        }
      },
      update: async ( id,data) => {
        
        try {
            const updatedSubCategory = await subCatagory.findByIdAndUpdate(
                id, 
                data, 
                { new: true }
              );
              
              return updatedSubCategory;
        } catch (error) {
          throw error;
        }
      },
}

module.exports = SubCatagoryRepository;