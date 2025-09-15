import connectDB from "../config/db.js";
// importing data models
import Client from "../models/Client.js";
import Loan from "../models/Loan.js";
import IssuedLoan from "../models/IssuedLoan.js";
import Payment from "../models/Payment.js";
// importing seed data
import {
  seedClients,
  seedLoans,
  seedIssuedLoans,
  seedPayments,
} from "./seedData.js";

export default async function seedDB() {
  try {
    await connectDB();

    await Client.deleteMany();
    await IssuedLoan.deleteMany();
    await Loan.deleteMany();
    await Payment.deleteMany();

    await Client.insertMany(seedClients);
    await Loan.insertMany(seedLoans);
    await IssuedLoan.insertMany(seedIssuedLoans);
    await Payment.insertMany(seedPayments);
  } catch (error) {
    console.error(error);
  }
}
