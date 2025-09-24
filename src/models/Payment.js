import mongoose from "mongoose";
import {creationDateValidator} from "../utils/validators.js";

const paymentRecordSchema = new mongoose.Schema({
  loanName: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 1,
    default: 1,
  },
  paymentDate: {
    type: Date,
    required: true,
    default: Date.now,
    validate: creationDateValidator,
  },
});

const Payment = mongoose.model("Payment", paymentRecordSchema);

export default Payment;