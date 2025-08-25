import mongoose from "mongoose";
import {loanNameValidator, LOAN_NAMES_RATES, termValidator} from "../utils/validators.js";

const loanTypesSchema = new mongoose.Schema({
  name: { type: String, required: true, validate: loanNameValidator },
  rate: { type: Number, required: true, set: (value) => LOAN_NAMES_RATES[value] }, // in percent, set automatically base on the name. But probably virtual would be better. Fix later
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

const LoanType = mongoose.model('LoanType', loanTypesSchema);

export default LoanType;
