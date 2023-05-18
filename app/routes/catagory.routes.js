const express = require("express");
const bodyParser = require("body-parser");
const catagoryController = require("../modules/catagory/controllers/catagory.controller");
const verifysignup= require("../middleware/checkduplicateentities")
const router = express.Router();

router.get('/',catagoryController.getCatagory);
router.post('/catagory/create',[verifysignup.checkDuplicateEntries],catagoryController.createCatagory);
router.post('/catagory/update/:id',catagoryController.updateCatagory);
router.get('/catagory/updatePage/:id',catagoryController.getCatagorypage);
router.get('/catagory/delete/:id',catagoryController.deleteCatagory);
 

module.exports = router ;