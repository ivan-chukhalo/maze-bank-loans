import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config(); // Load environment variables from .env
const PORT = process.env.PORT || 3000;

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

const allowedTextCharsRegex = /^[a-zA-Z\u0400-\u04FF\s-]+$/; // Latin and Cyrillic letters, spaces, and hyphens only, no digits or special characters, more than 1 character
const forbiddenTextCharsRegex = /[!@#$%^&*(),.?":{}|<>0-9ёЁыЫэЭъЪ]/; // Exclude digits and specific special characters and ё, Ё, ы, Ы, э, Э, ъ, Ъ
const allowedPhoneValueRegex = /^\+380\d{9}$/; // Phone number must be in the "+380xxxxxxxxx format

const textValuesValidator = {
  validator: function (value) {
    if (forbiddenTextCharsRegex.test(value)) return false;
    return allowedTextCharsRegex.test(value);
  },
  message: (props) => `${props.value} is not a valid text value`,
};

const creationDateValidator = {
  validator: function (value) {
    return value <= new Date();
  },
  message: (props) => `Creation date can not be in the future`,
};

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: textValuesValidator,
  },
  phone: {
    type: String,
    required: true,
    match: allowedPhoneValueRegex, // use `match:` insted of `validate:` because there is no need in complex validation, just a simple regex check
  },
  contactPerson: {
    type: String,
    required: true,
    validate: textValuesValidator,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    validate: creationDateValidator,
  },
});

const LOAN_NAMES_RATES = {
  "Dlia Kuma": 1,
  "Ne Dlia Kuma": 10,
}

const loanNameValidator = {
  validator: function (value) {
    return Object.keys(LOAN_NAMES_RATES).includes(value);
  },
  message: (props) =>
    `Loan name ${props.value} is not recognized. Allowsed names are: ${Object.keys(LOAN_NAMES_RATES).join(", ")}`,
};

const termValidator = {
  validator: function (value) {
    return Number.isInteger(value) && value >= 12 && value <= 120;
  },
  message: (props) => `Term must be an integer between 12 and 120 months`,
};

const loanTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, validate: loanNameValidator },
  rate: { type: Number, required: true, set: (value) => LOAN_NAMES_RATES[value] }, // in percent, set automatically base on the name
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

const loanRecordSchema = new mongoose.Schema({
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
    min: 100,
    max: 1000,
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
