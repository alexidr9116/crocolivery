const db = require("./Helpers/Database/database");
const express = require("express");
const cors = require("cors");

const passport = require("passport");
const bodyParser = require("body-parser");
const Person = require("./Models/TestModel");
const commonRoutes = require("./Routes/CommonRoutes");
const adminRoutes = require("./Routes/AdminRoutes"); 
const questionRoutes = require('./Routes/QuestionRoutes');
const invoiceAddressRoutes = require('./Routes/BillingAddressRoutes');
const invoiceRoutes = require("./Routes/InvoiceRoutes");
const path = require('path');
var app = express();
// Apply middlewares
const allowedOrigins = ["http://localhost:8000", "http://localhost:3000", "https://localhost:8000", "https://localhost:3000"];
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./Helpers/Middleware/passport")(passport);
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Default route


app.use("/api/", commonRoutes);
app.use("/api/invoice/address/", invoiceAddressRoutes);
app.use("/api/admin/", adminRoutes);
app.use("/api/question/",questionRoutes);
app.use("/api/invoices/", invoiceRoutes);

const assetFolder  = path.resolve(__dirname, './build/');
app.use(express.static(assetFolder));
app.use("*",express.static(assetFolder))
//Run application
app.listen(process.env.PORT || 5354, () => {
  console.log("Application is running on port no. 5354");
});
