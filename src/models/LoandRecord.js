import mongoose from "mongoose";
import {creationDateValidator} from "../utils/validators.js";

const loanRecordsSchema = new mongoose.Schema({
  loanTypeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LoanType",
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
    max: 100000,
    default: 100,
  },
  loanDate: {
    type: Date,
    required: true,
    default: Date.now,
    validate: creationDateValidator,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "closed", "defaulted"],
    default: "active",
  },
});

const LoanRecord = mongoose.model("LoanRecord", loanRecordsSchema);

export default LoanRecord;
