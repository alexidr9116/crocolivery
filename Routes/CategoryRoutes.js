const express = require("express"); 
 
const subCategoryController = require("../Controllers/SubCategoryController"); 
var router = express.Router();

router.get("/sub/all",subCategoryController.getall)
router.get("/sub/list", subCategoryController.getNameList);
router.get("/sub/:id", subCategoryController.getInfo);
module.exports = router;