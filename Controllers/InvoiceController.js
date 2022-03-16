const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Response = require("../Helpers/Response");
const invoiceModel = require("../Models/InvoiceModel");
const userModel = require("../Models/UserModel");
const path = require("path");
const fs = require("fs");
var objectID = mongoose.Types.ObjectId;
const uploadInvoiceImages = async (req, res, next) => {
  try {
    const files = req.files;
    const subImages = [];
    
    for(let i = 0 ; i<files.length; i+=1){
      subImages.push(files[i].filename);
    }
    res.status(200).json({ success: true, message: 'Upload multi-files success',subImages });
  }
  catch (err) {
    res.status(400).json({ success: false, message: 'Invalid data' });
  }

} 
const insert = async(req,res,next)=>{
  const instance = new invoiceModel({
    recipient:req.body.recipient,
    invoiceName:`INV-${Date.now()}`,
    items:req.body.items,
    status:req.body.status,
    maker:objectID(req.user.id)
  });
  instance.save(err=>{
    if(err)
      return Response.err(res,err);
    return Response.ok(res,`Invoice is saved and status is ${instance.status} `);
  })
}
 
const update = async (req, res, next) => {
  var id = req.params.id;

  var uploadedFile = false;
  if (req.file) {
    uploadedFile = true;
    var result = validationResult(req);
    if (!result.isEmpty()) {
      fs.unlink(path.resolve(req.file.path), (err) => { });
      return Response.error(res, result.array()[0].msg);
    }
  }
  try {
    var isExists = await subCaletgoryModel.isExistsforModify(req.body.name, id);
    if (isExists) {
      return Response.error(res, "Category is already exists.");
    }
    else {
      const category = await subCaletgoryModel.findById(id);
      category.name = req.body.name;
      category.active = req.body.active;
      category.category = req.body.category;
      if (uploadedFile) {
        const imageUrl = category.image;

        if (imageUrl.length > 0) {
          fs.unlink(path.resolve(imageUrl), (err) => { });
        }

        category.image = req.file.path;

      }
      await category.save();
      return Response.ok(res, "Category was updated.", category);
    }
  } catch (error) {
    Response.error(res, error);
  }

};

const getall = (req, res, next) => {
  try {
    return new Promise(async (resolve, reject) => {
      await subCaletgoryModel.find().then((result) => {
        if (result && result.length > 0) {
          return resolve(
            Response.ok(res, "data retrieved successfully.", result)
          );
        } else {
          return resolve(Response.ok(res, "data not found."));
        }
      });
    });
  } catch (error) {
    Response.error(res, error);
  }
};
const getList = (req, res, next) => {
  try {
    return new Promise(async (resolve, reject) => {
      let result = await invoiceModel.aggregate([
        {
          $match:{
            maker:objectID(req.user._id)
          }
        },
        {
          $lookup:{
            from:'billingaddresses',
            localField:'recipient',
            foreignField:'_id',
            as:'billingAddress'
          }
        }
      ])
      if (result && result.length > 0) {
        let i = 1, limit = result.length ;
        result.forEach(async (item)=>{
          const user = await userModel.findById(item.maker);
          item.invoiceFrom = user;
          if(i == limit){
            return resolve(
              Response.ok(res, "data retrieved successfully.", result)
            );
          }
          i++; 
        });
      } else {
        return resolve(Response.ok(res, "data not found."));
      }
    });
    
  } catch (error) {
    Response.error(res, error);
  }
};

const remove = (req, res, next) => {
  try {
    var id = req.params.id;
    if (!objectID.isValid(id)) {
      return Response.error(res, "no any record found.");
    }
    return new Promise(async (resolve, reject) => {

      var category = await subCaletgoryModel.findById(id);

      if (category != null) {
        const imageUrl = category.image;
        await category.remove();
        if (imageUrl.length > 0) {
          fs.unlink(path.resolve(imageUrl), (err) => { });
        }
        resolve(Response.ok(res, "removed successfully."));
      } else {
        resolve(Response.ok(res, "no any record found."));
      }
    });
  } catch (error) {
    Response.error(res, error);
  }
};

const getInfo = (req, res, next) => {
  try {
    var id = req.params.id;
    if (!objectID.isValid(id)) {
      return Response.error(res, "no any record found.");
    }
    return new Promise(async (resolve, reject) => {
      var isExists = await subCaletgoryModel.isExistsById(id);
      if (isExists) {
        subCaletgoryModel.find({ _id: id }, (err, data) => {
          if (err) resolve(Response.error(res, err));
          resolve(Response.ok(res, "data retrieved successfully.", data[0]));
        });
      } else {
        resolve(Response.ok(res, "no any record found."));
      }
    });
  } catch (error) {
    Response.error(res, error);
  }
};

module.exports = {
  insert,
  update,
  getall,
  getList,
  remove,
  getInfo,
  uploadInvoiceImages,
};
