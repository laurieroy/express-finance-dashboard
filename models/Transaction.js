import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionSchema = new Schema(
  {
    buyer: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100, //since mongoose currency mult by 100, need to / 100 to get back to actual value in dollars
    },
    amount: {
      type: mongoose.Types.Currency,
      Currency: "USD",
      get: (v) => v / 100,
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
