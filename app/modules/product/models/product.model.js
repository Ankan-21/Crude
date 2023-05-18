
const mongoose = require("mongoose");

const Schema = mongoose.Schema ;

const productSchema = new Schema({
    product_name:{
        type:String,
        required :true,
    },
    cat_id:{
        type :Schema.Types.ObjectId ,
        required:true,

    },
    category:{
        type: String,
        required :true,
    },
    sub_id:{
        type: Schema.Types.ObjectId ,
        required :true,
    },
    sub_category:{
        type:String,
        required :true
    }

})

const product_model = new mongoose.model("Products",productSchema);

module.exports = product_model ;