const mongoose = require('mongoose');

const BillingAddressSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  surename: { type: String, default: "", minLength: 3, maxLength: 255, },
  name: { type: String, default: "", minLength: 3, maxLength: 255, },
  country: { type: String, default: "ru" },
  street: { type: String, default: "" },
  building: { type: String, default: "" },
  flat: { type: String, default: "" },
  index: { type: String, default: "" },
  tin: { type: String, default: "" },
  phone: { type: String, default: "" },
  isDefault: { type: Boolean, default: false },
  maker:{ type:mongoose.Types.ObjectId, ref:'users'}
});

class BillingAddressClass {
  static async isExists(surename, name, country,street) {

    var result = false;
    const data = await this.findOne({ surename, name, country, street});
    if (data) result = true;
    return result;
  }
  static async isExistsforModify(surename, name, country, street, id) {

    var result = false;
    const data = await this.findOne({ surename, name,country, street, _id: { $ne: id } });
    if (data) result = true;
    return result;
  }
  static async isExistsById(id) {
    var result = false;
    const data = await this.findOne({ _id: id });
    if (data) result = true;
    return result;
  }
}
BillingAddressSchema.loadClass(BillingAddressClass);
const BillingAddress = mongoose.model("BillingAddress", BillingAddressSchema);
module.exports = BillingAddress;