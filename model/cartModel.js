const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "details",
    required: true,
  },
  products: [
    {
      productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      productPrice:{
        type: Number,
        required: true,
      },
    },
  ],
  // walletAmount: {
  //   type: Number,
  //   required: true,
  // },
},{versionKey:false});

module.exports = mongoose.model("cartDetails", cartSchema);