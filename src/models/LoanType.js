import mongoose from "mongoose";
import {
  loanNameValidator,
  LOAN_NAMES_RATES,
  termValidator,
} from "../utils/validators.js";

const loanTypesSchema = new mongoose.Schema({
  name: { type: String, required: true, validate: loanNameValidator },
  term: {
    type: Number,
    required: true,
    min: 12,
    max: 120,
    validate: termValidator,
  }, // in months
  yearPenaltyRate: {
    type: Number,
    required: true,
    min: 10,
    max: 100,
    default: 10,
  }, // in percent
});

loanTypesSchema.virtual("rate").get(function () {
  return LOAN_NAMES_RATES[this.name];
});

const LoanType = mongoose.model("LoanType", loanTypesSchema);

export default LoanType;
