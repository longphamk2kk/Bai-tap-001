const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://longphamk2kk:longpham1808@cluster0.hib8jmz.mongodb.net/bai_tap01?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connect DB success");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;
