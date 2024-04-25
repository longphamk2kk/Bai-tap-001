const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const accountSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { 
    versionKey: false,
    timestamps: true
  }
);

accountSchema.pre("save", function (next) {
  const account = this;
  if (account.password){
    account.password = bcryptjs.hashSync(account.password, 10);
  }
  next();
});

//set("toJSON") xóa mk
//pre("findOneAndUpdate")
//pre("findByIdAndUpdate")

module.exports = mongoose.model("account", accountSchema);
