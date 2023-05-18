
const catagoryModel = require("../modules/catagory/models/catagory.model");
const flash = require("connect-flash");

exports.checkDuplicateEntries = (req, res, next) => {
  catagoryModel.findOne({ product_name: req.body.product_name }).exec((err, catagoryData) => {
    if (err) {
      console.log(err);
      return;
    }
    if (catagoryData) {
      req.flash("message", "Product name already exists.");
      req.flash("alert", "danger");
      return res.redirect("/");
    }

    next();
  });
};