const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Details",
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
        status: {
          type: String,
          default: "Pending",
        }
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "address",
      required: true,
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    paymentStatus: {
      type: String,
      default: "Unpaid",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("orderdetail", orderSchema);
