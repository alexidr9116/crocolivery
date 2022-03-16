const express = require("express");
const authMiddleware = require("../Helpers/Middleware/auth");
const billingAddressController = require("../Controllers/BillingAddressController");
const invoiceController = require("../Controllers/InvoiceController");
const {
    imageUpload,
    checkAndUploadImage,
} = require("../Helpers/FileUploader/fileuploader");
const validator = require("../Helpers/Validations/Validator");
var router = express.Router();

router.post('/upload/images', authMiddleware, imageUpload.array('images', 10), invoiceController.uploadInvoiceImages);

router.post('/customer/new', authMiddleware, invoiceController.insert);

router.get('/customer/list',authMiddleware,invoiceController.getList);
module.exports = router;