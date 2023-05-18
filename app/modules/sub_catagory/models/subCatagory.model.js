const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const subCatagorySchema = new Schema({
    sub_name:{
        type : String,
        required :true
    },
    catagory:{
        type:String,
        required:true, 
    }
})
const  subCatagoryModel = mongoose.model("Sub-Catagory",subCatagorySchema);
module.exports = subCatagoryModel;