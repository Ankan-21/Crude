const Catagory = require("../models/catagory.model");

const catagoryrepository = {
  save: async (data) => {
    try {
      let catagory = await Catagory.create(data);

      if (catagory) {
        return catagory;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  },
  update: async ( id,data) => {
    console.log( typeof data);
    try {
        const updatedCategory = await Catagory.findByIdAndUpdate(
            id, 
            data, 
            { new: true }
          );
          
          return updatedCategory;
    } catch (error) {
      throw error;
    }
  },
  delete: async (id) => {
    try {
      let catagory = await Catagory.findByIdAndRemove(id);
      if (catagory) {
        return catagory;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  },
  getAll :async()=>{
    try {
        let allCatagory = await Catagory.find()
    if(!allCatagory){
        return null ;
    }
    return allCatagory;
    } catch (error) {
        throw error ;
    }
  },

  getById :async(id)=>{
    try {
      let cat_data =await Catagory.findById(id);
      if(!cat_data){
        return null;
      }
      return cat_data ;
    } catch (e) {
      throw e ;
    }
  }
};

module.exports = catagoryrepository;
