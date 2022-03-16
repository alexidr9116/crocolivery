const express = require("express");
const authMiddleware = require("../Helpers/Middleware/auth");
const billingAddressController = require("../Controllers/BillingAddressController");

const validator = require("../Helpers/Validations/Validator");
var router = express.Router();

router.post("/add", authMiddleware,
    validator.reqStringValidator("surename", 3),
    validator.reqStringValidator("name", 3),

    validator.reqStringValidator("country", 3),
    validator.reqStringValidator("street", 3),
    validator.reqStringValidator("building", 3),
    validator.reqStringValidator("index", 3),
    validator.reqStringValidator("tin", 3),
    validator.reqBoolean("isDefault"),
    billingAddressController.add);
router.put("/update/:id", authMiddleware,
    validator.reqStringValidator("surename", 3),
    validator.reqStringValidator("name", 3),

    validator.reqStringValidator("country", 3),
    validator.reqStringValidator("street", 3),
    validator.reqStringValidator("building", 3),
    validator.reqStringValidator("index", 3),
    validator.reqStringValidator("tin", 3),
    validator.reqBoolean("isDefault"),
    billingAddressController.update);
router.delete("/delete/:id", authMiddleware,
    billingAddressController.remove);
router.get("/all", billingAddressController.getAll)
router.get("/list",authMiddleware, billingAddressController.getList)
router.get("/:id", billingAddressController.getOne);
module.exports = router;