import mongoose from "mongoose";
import {creationDateValidator, loanNameValidator} from "../utils/validators.js";

const paymentRecordSchema = new mongoose.Schema({
  loanName: {
    type: String,
    required: true,
    validate: loanNameValidator,
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

const PaymentRecord = mongoose.model("PaymentRecord", paymentRecordSchema);

export default PaymentRecord;