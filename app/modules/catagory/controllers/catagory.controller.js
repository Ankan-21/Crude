const catagoryrepo = require("../repositories/catagory.repository");
const Catagory = require("../models/catagory.model");
const { response } = require("express");

const createCatagory = async (req, res) => {
  try {
    const newCatagory = new Catagory({
      product_name: req.body.product_name,
    });
    let saveCatagory = await catagoryrepo.save(newCatagory);
    // res.json({ message: "catagory created" });
    res.redirect("/")
  } catch (error) {
    console.log("err while creating the catagory", error);
    throw error;
  }
};

const updateCatagory = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name } = req.body;

    const updatedCatagory = await catagoryrepo.update(id, { product_name });

    if (!updatedCatagory) {
      return res.status(404).json({ error: "Catagory not found" });
    }

    // res.status(200).json({ catagory: updatedCatagory });
    res.redirect('/');
  } catch (error) {
    throw error;
  }
  
};

const deleteCatagory = async(req,res)=>{
    try {
        const {id}= req.params;
        const deleteCatagory = await catagoryrepo.delete(id);
        if (!deleteCatagory) {
            return res.status(404).json({ error: "Catagory not deleted" });
          }

        //   res.status(200).json({ catagory: deleteCatagory });
        res.redirect('/')

    } catch (error) {
        throw error;
    }

}

const getCatagory = async(req, res) => {
    try {
      const catagoryData = await catagoryrepo.getAll();
  
      if (req.headers.accept && req.headers.accept.includes("application/json")) {
        // client requested JSON data
        res.status(200).json({ catagory: catagoryData });
      } else {
        // client requested a view
        res.render("catagory/views/catagoryPage.ejs", {
          page_title: "Catagory Page",
          response: catagoryData,
        });
      }
    } catch (error) {
      throw error;
    }
  };
  const getCatagorypage =async(req,res)=>{
    try {
        const {id} = req.params ;
        const catagoryData = await catagoryrepo.getById(id);
  
      if (req.headers.accept && req.headers.accept.includes("application/json")) {
        // client requested JSON data
        res.status(200).json({ catagory: catagoryData });
      } else {
        // client requested a view
        res.render("catagory/views/catagoryUpdatePage.ejs", {
          page_title: "Catagory update Page",
          response: catagoryData,
        });
      }
    } catch (error) {
        throw error ;
    }
  }
  


module.exports = {
  createCatagory,
  updateCatagory,
  deleteCatagory,
  getCatagory,
  getCatagorypage
};
