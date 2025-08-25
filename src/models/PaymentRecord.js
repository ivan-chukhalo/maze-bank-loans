import mongoose from "mongoose";
import {creationDateValidator} from "../utils/validators.js";

const paymentRecordSchema = new mongoose.Schema({
  loanRecordID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LoanRecord",
    required: true,
  },
  clientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
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

const PaymentRecord = mongoose.model("PaymentRecorsd", paymentRecordSchema);

export default PaymentRecord;