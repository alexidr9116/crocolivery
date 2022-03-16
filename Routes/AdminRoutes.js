const express = require("express");
const { check } = require("express-validator");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const auth = require("../Controllers/AuthController");
const subCategoryController = require("../Controllers/SubCategoryController");
const questionController = require("../Controllers/QuestionController");
const {
  imageUpload,
  checkAndUploadImage,
} = require("../Helpers/FileUploader/fileuploader");
const Global = require("../Helpers/Global");
const Response = require("../Helpers/Response");
const upload = imageUpload.fields([{ name: "image", maxCount: 1 }]);
const validator = require("../Helpers/Validations/Validator");
var router = express.Router();
const authMiddleware = require("../Helpers/Middleware/auth");


//------------------- questions

router.post("/question/add", authMiddleware,
  validator.reqStringValidator("title", 3),
  validator.reqStringValidator("type", 3),
  validator.reqBoolean("isRequired"),
  questionController.add);
router.put("/question/update/:id", authMiddleware, 
  validator.reqStringValidator("title", 3),
  validator.reqStringValidator("type", 3),
  validator.reqBoolean("isRequired"),
  questionController.update);
router.delete("/question/delete/:id", authMiddleware, 
  questionController.remove);

module.exports = router;
