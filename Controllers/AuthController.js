const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult, check } = require("express-validator");
const userModel = require("../Models/UserModel");
const Response = require("../Helpers/Response");
const Global = require("../Helpers/Global");
const {
  mobileVerificationTemplate,
} = require("../Helpers/Templates/MobileVerificationTemp");
const { emailVerificationTemplate } = require("../Helpers/Templates/EmailTemp");
const {
  resetPasswordEmailTemplate,
} = require("../Helpers/Templates/ResetPasswordLink");
const { MobileOTPMessage } = require("../Helpers/Templates/MobileOTPTemp");
var objectID = mongoose.Types.ObjectId;

const keys = require('../Helpers/Middleware/keys');

const jwtsign = (payload) => {
  // Sign token
   
  return jwt.sign(
    payload,
    keys.secretOrKey,
    {
      expiresIn: 31556926 // 1 year in seconds
    }
  );
}
  
const encryptPassword = async (password) => {
  return new Promise(async (resolve, reject) => {
    bcrypt.hash(password, 10, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

const checkPassword = (password, hashPassword) => {
  return new Promise(async (resolve, reject) => {
    bcrypt.compare(
      password.toString(),
      hashPassword.toString(),
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      }
    );
  });
};

const resgister = async (req, res) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  req.body.password = await encryptPassword(req.body.password);
  var otp = Global.randomNumber(4);
  req.body.otp = otp;

  var user = new userModel(req.body);
  user.save((err) => {
    var token = jwtsign({
      id:user._id,
      email:user.email,
      mobile:user.mobile,
      
    });
  
    user.token = token;
    if (err) return Response.error(res, err, null);
    // Global.sendMessage(
    //   req.body.mobile,
    //   MobileOTPMessage(user.firstName + " " + user.lastName, otp)
    // );
    // Global.sendEmail(
    //   user.email,
    //   "Verification link for verify your email address.",
    //   emailVerificationTemplate(
    //     req.body.emailVerificationLink + "verification/email/" + token
    //   )
    // );
    // Global.sendEmail(
    //   user.email,
    //   "OTP to verify your mobile number.",
    //   mobileVerificationTemplate(otp)
    // );
    return Response.ok(
      res,
      "Registered successfully. You can use service.",
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        token:  user.token,
        role:user.role,
      }
    );
  });
};

const login = async (req, res) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  var userData = await userModel.findForLogin(req.body.email);
  if (userData) {
    var isPasswordMatched = await checkPassword(
      req.body.password,
      userData.password
    );
    if (isPasswordMatched) {
      userData = Global.convertObject(userData);
      _us2 = Global.select(userData, [
        "_id",
        "firstName",
        "lastName",
        "mobile",
        "email",
        "profileImage",
        "role",
      ]);
      _us2.token = jwtsign({
        id:userData._id,
        email:userData.email,
        mobile:userData.mobile,
      })
      if (!userData.emailVerified) {
        return Response.error(res, "Please verify your email id.");
      } else if (!userData.mobileVerified) {
        // return Response.error(res, "Please verify your mobile number.", {
        //   mobile: userData.mobile,
        // });

        return Response.ok(res, "logged in successfully.", _us2);
      } else {
        return Response.ok(res, "logged in successfully.", _us2);
      }
    } else {
      return Response.error(res, "Password is not matched.");
    }
  } else {
    return Response.error(res, "Email  is not found.");
  }
};

const forgetPassword = async (req, res) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  var user = await userModel.findByEmail(req.body.email);
  if (user) {
    const userData = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobile: user.mobile,
    };
    var token = jwtsign({
      id:user._id,
      email:user.email,
      mobile:user.mobile,
    })
    Global.sendEmail(
      req.body.email,
      "Reset your password.",
      resetPasswordEmailTemplate(req.body.resetLink + "reset-password/" + token)
    );
    Response.ok(
      res,
      "Password reset link is sent to your registered email address."
    );
  } else {
    return Response.error(res, "User is not found.");
  }
};

const resetPassword = async (req, res, next) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  
  if (req.user) {
    var password = await encryptPassword(req.body.password);
    var updateLog = await userModel.updatePassword(req.user.email, password);
    if (updateLog === "true") {
      Response.ok(res, "Password successfully changed.");
    } else {
      Response.error(res, updateLog);
    }
  }
};

const getUserInfo = async (req, res, next) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  var userData = await userModel.findByEmail(req.user.email);
  userData = Global.convertObject(userData);
  var userDataFinal = Global.omit(userData, [
    "password",
    "otp",
    "token",
    "active",
    "createdAt",
    "mobileVerified",
    "emailVerified",
    "adminVerified",
  ]);
  if (userData)
    return Response.ok(res, "Data retrived successfully.", userDataFinal);
};

const verifyOTP = async (req, res) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  var isExists = await userModel.isMobileExists(req.body.mobile);
  if (!isExists) return Response.error(res, "Mobile number is not exists.");
  var userData = await userModel.findByMobile(req.body.mobile);
  if (userData.otp.toString() === req.body.otp.toString()) {
    userModel.findOneAndUpdate(
      { mobile: req.body.mobile },
      { $set: { mobileVerified: true } },
      { new: true, useFindAndModify: true },
      (err, doc) => {
        if (!err) {
          return Response.ok(res, "OTP verified successfully");
        } else {
          return Response.error(res, "OTP verification failed.");
        }
      }
    );
  } else {
    Response.error(res, "OTP not matched.");
  }
};

const resendOTP = async (req, res) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  var isExists = await userModel.isMobileExists(req.body.mobile);
  if (!isExists) return Response.error(res, "Mobile number is not exists.");
  var otp = Global.randomNumber(4);
  var userData = await userModel.findByMobile(req.body.mobile);
  var updateLog = await userModel.updateOTP(req.body.mobile, otp);
  if (updateLog === "true") {
    Global.sendMessage(
      req.body.mobile,
      MobileOTPMessage(userData.firstName + " " + userData.lastName, otp)
    );
    Global.sendEmail(
      userData.email,
      "OTP to verify your mobile number.",
      mobileVerificationTemplate(otp)
    );
    Response.ok(res, "OTP resent successfully.");
  } else {
    Response.error(res, updateLog);
  }
};

const verifyEmail = async (req, res) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }
  var token = req.body.token;
  var user = getUserFromToken(res, token);

  var isExists = await userModel.isEmailExists(user.email);
  if (!isExists) return Response.error(res, "User is not exists.");
  var userData = await userModel.findByEmail(user.email);
  if (userData) {
    userModel.findOneAndUpdate(
      { email: user.email },
      { $set: { emailVerified: true } },
      { new: true, useFindAndModify: true },
      (err, doc) => {
        if (!err) {
          return Response.ok(res, "Email verified successfully");
        } else {
          return Response.error(res, "Email verification failed.");
        }
      }
    );
  } else {
    return Response.error(res, "Email verification failed.");
  }
};

const changePassword = async (req, res) => {
  var result = validationResult(req);
  if (!result.isEmpty()) {
    return Response.error(res, result.array()[0].msg);
  }

  if (req.user) {
    var userData = await userModel.findByEmail(req.user.email);
    var oldpassword = false;
    oldpassword = await checkPassword(req.body.oldpassword, userData.password);
    if (oldpassword) {
      var password = await encryptPassword(req.body.newpassword);
      var updateLog = await userModel.updatePassword(req.user.email, password);
      if (updateLog === "true") {
        return Response.ok(res, "Password successfully changed.");
      } else {
        return Response.error(res, updateLog);
      }
    } else {
      return Response.error(res, "Old password is not matched.");
    }
  } else {
    return Response.unauthorize(res, "Unauthorized access.");
  }
};

const updateProfilePhoto = async (req, res) => {
  if (req.file) {
    var result = validationResult(req);
    if (!result.isEmpty()) {
      fs.unlink(path.resolve(req.file.path), (err) => { });
      return Response.error(res, result.array()[0].msg);
    }
    try {
      if (req.user) {
        var isExists = await userModel.findByEmail(req.user.email);
        if (isExists) {
          var updatedData = await userModel
            .findByIdAndUpdate(
              req.user._id,
              { profileImage: req.file ? req.file.path : "" },
              { new: true, useFindAndModify: true }
            )
            .exec();
          if (updatedData) {

            Response.ok(res, "Profile image updated successfully.", { user: req.user._id, profileImage: req.file.path });
          } else {
            Response.error(res, "Error in updating user profile.");
          }
        } else {
          Response.error(res, "User not found.");
        }
      } else {
        Response.error(res, "User not authorize to access.");
      }
    } catch (error) {
      Response.error(res, "Error", error);
    }
  } else {
    Response.error(res, "Please add profile image.");
  }
};

module.exports = {
  resgister,
  login,
  forgetPassword,
  resetPassword,
  getUserInfo,
  checkPassword,
  encryptPassword, 
 
  verifyOTP,
  resendOTP,
  verifyEmail,
   
  changePassword,
  updateProfilePhoto,
};
