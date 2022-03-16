var mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mongodb_hhu:HHU123@cluster0.thpie.mongodb.net/crocolivery",
  // "mongodb://localhost:27017/crocolivery",
  { useNewUrlParser: false, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Database connected successfully.");
    else
      console.log(
        "Error while connecting database : " + JSON.stringify(err.message)
      );
  }
);
