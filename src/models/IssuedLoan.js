import mongoose from "mongoose";
import {creationDateValidator} from "../utils/validators.js";
import {loanNameValidator} from '../utils/validators.js'

const loanRecordsSchema = new mongoose.Schema({
  loanName: {
    type: String,
    default: "Ne Dlia Kuma",
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

const IssuedLoan = mongoose.model("IssuedLoan", loanRecordsSchema);

export default IssuedLoan;
