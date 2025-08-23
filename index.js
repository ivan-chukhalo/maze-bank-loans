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

const termValidator = {
    validator: function(value){
        return Number.isInteger(value) && value>=12 && value<=120;
    }
}

const loanNameValidator = {
    validator: function(value){
        return value==="Dlia Kuma" || value==="Ne Dlia Kuma";
    },
    message: (props) => `There is no such loan ${props.value}. Only "Dlia Kuma" and "Ne Dlia Kuma" are allowed.`,
}

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: textValuesValidator,
  },
  activityType: {
    type: String,
    required: true,
    validate: textValuesValidator,
  },
  address: {
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

const loanTypeVariantSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, validate: loanNameValidator},
        rate: {type: Number, required: true,}
    }
);

loanTypeVariantSchema.path('rate').set(
    function(value){
        if (this.name === "Dlia Kuma") return 1;
        if (this.name === "Ne Dlia Kuma") return 10; 
    }
);

const loanTypeSchema = new mongoose.Schema({
    term: { type: Number, required: true, min: 12, max: 120, validate: termValidator}, // in months
    yearPenaltyRate: { type: Number, required: true, min: 10, max: 100, default: 10}, // in percent
    variants: [loanTypeVariantSchema],
});
