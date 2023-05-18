


const subCatagoryModel = require("../modules/sub_catagory/models/subCatagory.model");

exports.checkDuplicateEntries = (req, res, next) => {
    subCatagoryModel.findOne({
        sub_name: req.body.sub_name
    }).exec((err, subCatagory) => {
        if (err) {
            console.log(err);
            return;
        }
        if (subCatagory) {
            // req.flash("message", "Username Already Exists");
            // req.flash("alert", "alert-danger");
            return res.redirect("/");
            // console.log("Username Already Exists");
            // return;
        }
        
                next();
            })
            // next();


        }