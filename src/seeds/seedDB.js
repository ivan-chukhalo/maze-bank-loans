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

       console.log("Connecting to DB...");
    await connectDB();
    console.log("✅ Connected to DB");

    console.log("Clearing collections...");
    await Client.deleteMany();
    console.log("✅ Clients cleared");
    await IssuedLoan.deleteMany();
    console.log("✅ IssuedLoans cleared");
    await Loan.deleteMany();
    console.log("✅ Loans cleared");
    await Payment.deleteMany();
    console.log("✅ Payments cleared");

    console.log("Inserting seed data...");
    await Client.insertMany(seedClients);
    console.log("✅ Clients seeded");
    await Loan.insertMany(seedLoans);
    console.log("✅ Loans seeded");
    await IssuedLoan.insertMany(seedIssuedLoans);
    console.log("✅ IssuedLoans seeded");
    await Payment.insertMany(seedPayments);
    console.log("✅ Payments seeded");

    console.log("🎉 Seeding finished!");
  } catch (error) {
    console.error(error);
  }
}
