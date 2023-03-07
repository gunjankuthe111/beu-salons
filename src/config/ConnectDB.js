const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
  } catch (e) {
    console.log(e);
  }
};

module.exports = ConnectDB;
