const mongoose = require('mongoose');
const InvoiceItemSchema = mongoose.Schema({
  url:{type:String,default:""},
  product: { type: String, default: "" },
  vendor: { type: String, default: "" },
  price: { type: Number, default: 0 },
  image: { type: String, default: "" },
  size: { type: String, default: "" },
  color: { type: String, default: "" },
  quantify: { type: Number, default: 0 },
  comment: { type: String, default: "" },
  
});
const InvoiceSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  recipient : {type : mongoose.Types.ObjectId, ref: "BillingAddresses"},
  status:{type:String,default:'draft',enum: ["draft","canceled", "paid","in process","checked"] },
  invoiceName: { type: String, default: "" },
  discount: { type: Number, default: 0 },
  tax: { type: Number, default: 0 },
  maker:{type:mongoose.Types.ObjectId,ref:"users"},
  limitTime:{type:Number,default:15},
  items:[InvoiceItemSchema],
  totalPrice:{type:Number,default:0},
  currency:{type:Object,default:{label:"€",value:"EURO"}}
});

class InvoiceClass {
  static async isExists(invoiceName) {

    var result = false;
    const data = await this.findOne({ invoiceName});
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
InvoiceSchema.loadClass(InvoiceClass);
const Invoice = mongoose.model("Invoice", InvoiceSchema);
module.exports = Invoice;