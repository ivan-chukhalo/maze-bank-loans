import mongoose from "mongoose";
import { termValidator } from "../utils/validators.js";

const loanSchema = new mongoose.Schema({
  name: { type: String, required: true },
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
  rate: {
    type: Number,
    required: true,
    min: 1, // in percent
    max: 10, // in percent
    default: 1,
  },
});

const Loan = mongoose.model("Loan", loanSchema);

export default Loan;
