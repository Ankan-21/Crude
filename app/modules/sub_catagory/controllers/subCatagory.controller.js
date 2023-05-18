const SubCatagoryRepo = require("../repositories/subCatagory.repository")
const catagorymodel = require("../../catagory/models/catagory.model")
const subModel = require("../models/subCatagory.model")

const getSubPage =async(req,res)=>{
    try {
        const subCatagory = await SubCatagoryRepo.getAll(subModel);
        const catagory = await SubCatagoryRepo.getAll(catagorymodel);
        console.log(catagory);
        res.render('sub_catagory/views/subCatagory.ejs',{
            page_title : "Sub-Catagory",
            response : subCatagory,
            response1 : catagory,
        })
    } catch (e) {
        throw e ;
    }
}

const createSub_catagory = async(req,res)=>{
    try {
        const {sub_name ,catagory} = req. body ;
        const newSubCatagory = new subModel({
            sub_name:sub_name,
            catagory:req.body.catagory, 
        })
        let data = await SubCatagoryRepo.save(newSubCatagory);
        
        res.redirect('/subCatagory/base')


    } catch (e) {
        throw e ;
    }
}
const updateSubCatagory = async (req, res) => {
    try {
      const { id } = req.params;
      const { sub_name,catagory } = req.body;
  
      const updatedSubCatagory = await SubCatagoryRepo.update(id, ({ sub_name ,catagory}));
  
      if (!updatedSubCatagory) {
        return res.status(404).json({ error: "Catagory not found" }); 
      }
  
      // res.status(200).json({ catagory: updatedCatagory });
      res.redirect("/subCatagory/base");
    } catch (error) {
      throw error;
    }
    
  };
  const deleteSubCatagory = async(req,res)=>{
    try {
        const {id}= req.params;
        const deleteCatagory = await SubCatagoryRepo.delete(id);
        if (!deleteCatagory) {
            return res.status(404).json({ error: "Catagory not deleted" });
          }

        //   res.status(200).json({ catagory: deleteCatagory });
        res.redirect('/subCatagory/base')

    } catch (error) {
        throw error;
    }
}


const getUpdatePage = async(req,res)=>{
    try {
        const  {id} = req.params ;
        let updated_sub = await SubCatagoryRepo.getById(id);
        res.render('sub_catagory/views/subCatagoryUpdate.ejs',{
            page_title: "Update Sub-Catagory",
            response : updated_sub,
        })
    } catch (e) {
        throw e ;
    }
}






module.exports ={
    getSubPage,
    createSub_catagory,
    updateSubCatagory,
    deleteSubCatagory,
    getUpdatePage,
}