const mongoose = require("mongoose");
const Schema = mongoose.Schema ;

const catagorySchema = new Schema({
    product_name:{type:String}
});

const catagoryModel = new mongoose.model("Catagory",catagorySchema);

module.exports = catagoryModel;