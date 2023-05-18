const express = require("express");

const SubController = require("../modules/sub_catagory/controllers/subCatagory.controller")

const verifysignup= require("../middleware/subcheckduplicate")

const router = express.Router();


router.get("/subCatagory/base",SubController.getSubPage);
router.post("/subCatagory/save",[verifysignup.checkDuplicateEntries],SubController.createSub_catagory);
router.get("/subCatagory/delete/:id",SubController.deleteSubCatagory);
router.get("/subCatagory/update/page/:id",SubController.getUpdatePage);
router.post("/subCatagory/update/data/:id",SubController.updateSubCatagory);







module.exports = router;
