import connectDB from "../config/db.js";
// importing data models
import BankClient from "../models/BankClient.js";
import LoanType from "../models/LoanType.js";
import LoanRecord from "../models/LoanRecord.js";
import PaymentRecord from "../models/PaymentRecord.js";
// importing seed data
import {
  seedClients,
  seedLoanTypes,
  seedLoanRecord,
  seedPaymentRecord,
} from "./seedData.js";

export default async function seedDB() {
  try {
    await connectDB();

    await BankClient.deleteMany();
    await LoanRecord.deleteMany();
    await LoanType.deleteMany();
    await PaymentRecord.deleteMany();

    await BankClient.insertMany(seedClients);
    await LoanType.insertMany(seedLoanTypes);
    await LoanRecord.insertMany(seedLoanRecord);
    await PaymentRecord.insertMany(seedPaymentRecord);
  } catch (error) {
    console.error(error);
  }
}
