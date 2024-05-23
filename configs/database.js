const mongoose = require("mongoose");
const accountModel = require("../models/accountModel");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://longphamk2kk:longpham1808@cluster0.hib8jmz.mongodb.net/bai_tap01?retryWrites=true&w=majority&appName=Cluster0"
    );

    const accountAdmin = await accountModel.findOne({
      username: 'admin1'
    });

    if (!accountAdmin){
      await accountModel.create({
        username: "admin1",
        password: "admin",
        phone: "098909873",
        address: "Ha Noi",
        role: "admin"
      })

      console.log("admin created");
    }

    console.log("connect DB success");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;
