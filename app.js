import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from './src/config/db.js';

const app = express();
dotenv.config(); // Load environment variables from .env
const PORT = process.env.PORT || 3000;

connectDB();

const loanTypeSchema = new mongoose.Schema({
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
