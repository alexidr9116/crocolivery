const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Response = require("../Helpers/Response");
const BillingAddressModel = require("../Models/BillingAddressModel"); 
const objectID = mongoose.Types.ObjectId;

const add = async (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  try { 
    const instance = new BillingAddressModel({
      ...req.body,
      maker:objectID(req.user._id)
    });
    var isExists = await BillingAddressModel.isExists(req.body.surename, req.body.name, req.body.country,req.body.street);
    if (isExists) {
      return Response.error(res, "Same Address is already exists.");
    }
    instance.save((err) => {
      if (err) return Response.error(res, err.message, null);
     
      return Response.ok(res, "Recipient Address added successfully.", instance);
    });
  } catch (error) {
    Response.error(res, error);
  }

};

const update = async (req, res, next) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  var id = req.params.id;
  try {
    var isExists = await BillingAddressModel.isExistsforModify(req.body.surename, req.body.name, req.body.country,req.body.street, id);
    if (isExists) {
      return Response.error(res, "Address is already exists.");
    }
    else {
      const instance = await BillingAddressModel.findById(id);
      instance.surename = req.body.surename;
      instance.name = req.body.name;
      instance.street = req.body.street;
      instance.building = req.body.building;
      instance.country = req.body.country;
      instance.tin = req.body.tin;
      instance.phone = req.body.phone;
      instance.index = req.body.index;
      instance.isDefault = req.body.isDefault;
      await instance.save();
      return Response.ok(res, "Category was updated.", instance);
    }
  } catch (error) {
    Response.error(res, error);
  }

};
// need admin side
const getAll = (req, res, next) => {
  try {
    return new Promise(async (resolve, reject) => {
      await BillingAddressModel.find().then((result) => {
        if (result && result.length > 0) {
          return resolve(
            Response.ok(res, "data retrieved successfully.", result)
          );
        } else {
          return resolve(Response.ok(res, "data not found."),[]);
        }
      });
    });
  } catch (error) {

    Response.error(res, error);
  }
};
 
// need user side
const getList = (req, res, next) => {
  try {
    return new Promise(async (resolve, reject) => {
      await BillingAddressModel.find({maker:objectID(req.user._id)}).then((result) => {
        if (result && result.length > 0) {
          return resolve(
            Response.ok(res, "data retrieved successfully.", result)
          );
        } else {
          return resolve(Response.ok(res, "data not found."),[]);
        }
      });
    });
  } catch (error) {

    Response.error(res, error);
  }
};
const remove = (req, res, next) => {
   
  try {
    var id = req.params.id;
    if (!objectID.isValid(id)) {
      return Response.error(res, "invalid record id");
    }
    return new Promise(async (resolve, reject) => {
      var instance = await BillingAddressModel.findById(id);
      if (instance != null) {
        await instance.remove();
        resolve(Response.ok(res, "removed successfully."));
      } else {
        resolve(Response.ok(res, "no any record found."));
      }
    });
  } catch (error) {
    Response.error(res, error);
  }
};

const getOne = (req, res, next) => {
  try {
    var id = req.params.id;
    if (!objectID.isValid(id)) {
      return Response.error(res, "invalid record number");
    }
    return new Promise(async (resolve, reject) => {

      BillingAddressModel.find({ _id: id }, (err, data) => {
        if (err) resolve(Response.error(res, err));
        if (data == null || data.length == 0)
          resolve(Response.ok(res, "no any record found."));
        resolve(Response.ok(res, "data retrieved successfully.", data[0]));
      });
    });
  } catch (error) {
    Response.error(res, error);
  }
};

module.exports = {
  add,
  update,
  getAll, 
  remove,
  getList,
  getOne,
};
