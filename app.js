import express from "express";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";

import BankClient from "./src/models/BankClient.js";
import LoanType from "./src/models/LoanType.js";
import LoanRecord from "./src/models/LoanRecord.js";
import PaymentRecord from "./src/models/PaymentRecord.js";

const app = express();
dotenv.config(); // Load environment variables from .env
const PORT = process.env.PORT || 3000;

const seedDB = async () => {
  try {
    await connectDB();

    // cleaning up the database
    await BankClient.deleteMany();
    await LoanRecord.deleteMany();
    await LoanType.deleteMany();
    await PaymentRecord.deleteMany();

    // Adding BankClients
    await BankClient.insertMany([
      {
        name: "Explosive Music Label",
        phone: "+380111111111",
        contactPerson: "Pes Patron",
        createdAt: new Date(),
      },
      {
        name: "Invisible Neck Technologies",
        phone: "+380222222222",
        contactPerson: "Mykhaylo Lebiga",
        createdAt: new Date(),
      },
      {
        name: "Our Flowers Int",
        phone: "+380333333333",
        contactPerson: "Mykola Zyrianov",
        createdAt: new Date(),
      },
      {
        name: "World Wide Sanctions Delivery",
        phone: "+380444444444",
        contactPerson: "Vasyl Maluk",
        createdAt: new Date(),
      },
      {
        name: "Card Dealer",
        phone: "+380555555555",
        contactPerson: "Kyrylo Budanov",
        createdAt: new Date(),
      },
      {
        name: "Suspicious Sharagha",
        phone: "+380666666666",
        contactPerson: "Some From Above",
        createdAt: new Date(),
      },
    ]);

    // Adding LoanTypes
    await LoanType.insertMany([
      { name: "Dlia Kuma", term: 120, yearPenaltyRate: 10 },
      { name: "Ne Dlia Kuma", term: 120, yearPenaltyRate: 100 },
    ]);

    // Adding LoanRecords
    await LoanRecord.insertMany([
      {
        loanTypeID: await LoanType.findOne({ name: "Dlia Kuma" }),
        clientID: await BankClient.findOne({ name: "Explosive Music Label" }),
        amount: 1000,
        status: "active",
      },
      {
        loanTypeID: await LoanType.findOne({ name: "Dlia Kuma" }),
        clientID: await BankClient.findOne({
          name: "Invisible Neck Technologies",
        }),
        amount: 2000,
        status: "active",
      },
      {
        loanTypeID: await LoanType.findOne({ name: "Dlia Kuma" }),
        clientID: await BankClient.findOne({ name: "Our Flowers Int" }),
        amount: 3000,
        status: "active",
      },
      {
        loanTypeID: await LoanType.findOne({ name: "Dlia Kuma" }),
        clientID: await BankClient.findOne({
          name: "World Wide Sanctions Delivery",
        }),
        amount: 4000,
        status: "active",
      },
      {
        loanTypeID: await LoanType.findOne({ name: "Dlia Kuma" }),
        clientID: await BankClient.findOne({ name: "Card Dealer" }),
        amount: 5000,
        status: "closed",
      },
      {
        loanTypeID: await LoanType.findOne({ name: "Ne Dlia Kuma" }),
        clientID: await BankClient.findOne({ name: "Suspicious Sharagha" }),
        amount: 5,
        status: "defaulted",
      },
    ]);

    // Adding PaymentRecords (loanTypes identifiers, clientID identifiers, then inserting records)
    const loanDliaKumaDoc = await LoanType.findOne({ name: "Dlia Kuma" });
    if (!loanDliaKumaDoc) throw new Error("Loan Dlia Kuma not found");
    const loanDliaKumaID = loanDliaKumaDoc._id;

    const loanNeDliaKumaDoc = await LoanType.findOne({ name: "Ne Dlia Kuma" });
    if (!loanNeDliaKumaDoc) throw new Error("Loan Ne Dlia Kuma not found");
    const loanNeDliaKumaID = loanNeDliaKumaDoc._id;
    
    const ClientExplosiveMusicLabelDoc = await BankClient.findOne({name: "Explosive Music Label",});
    if (!ClientExplosiveMusicLabelDoc) throw new Error("ClientExplosiveMusicLabelDoc not found");
    const ClientExplosiveMusicLabelID = ClientExplosiveMusicLabelDoc._id;
    const ClientInvisibleNeckTechnologiesDoc = await BankClient.findOne({name: "Invisible Neck Technologies",});
    if (!ClientInvisibleNeckTechnologiesDoc) throw new Error("ClientInvisibleNeckTechnologiesDoc not found");
    const ClientInvisibleNeckTechnologiesID = ClientInvisibleNeckTechnologiesDoc._id;
    const ClientOurFlowersIntDoc = await BankClient.findOne({name: "Our Flowers Int",});
    if (!ClientOurFlowersIntDoc) throw new Error("ClientOurFlowersIntDoc not found");
    const ClientOurFlowersIntID = ClientOurFlowersIntDoc._id;
    const ClientWorldWideSanctionsDeliveryDoc = await BankClient.findOne({name: "World Wide Sanctions Delivery",});
    if (!ClientWorldWideSanctionsDeliveryDoc) throw new Error("ClientWorldWideSanctionsDeliveryDoc not found");
    const ClientWorldWideSanctionsDeliveryID = ClientWorldWideSanctionsDeliveryDoc._id;
    const ClientCardDealerDoc = await BankClient.findOne({ name: "Card Dealer" });
    if (!ClientCardDealerDoc) throw new Error("ClientCardDealerDoc not found");
    const ClientCardDealerID = ClientCardDealerDoc._id;
    const ClientSuspiciousSharaghaDoc = await BankClient.findOne({name: "Suspicious Sharagha",});
    if (!ClientSuspiciousSharaghaDoc) throw new Error("ClientSuspiciousSharaghaDoc not found");
    const ClientSuspiciousSharaghaID = ClientSuspiciousSharaghaDoc._id;

    await PaymentRecord.insertMany([
      {
        loanTypeID: loanDliaKumaID,
        clientID: ClientExplosiveMusicLabelID,
        amount: 50,
        paymentDate: new Date("2025-01-01T15:30:32.214+03:00"),
      },
      {
        loanTypeID: loanDliaKumaID,
        clientID: ClientExplosiveMusicLabelID,
        amount: 100,
        paymentDate: new Date("2025-02-01T15:30:32.214+03:00"),
      },
      {
        loanTypeID: loanDliaKumaID,
        clientID: ClientExplosiveMusicLabelID,
        amount: 200,
        paymentDate: new Date("2025-03-01T11:30:32.214+03:00"),
      },
      {
        loanTypeID: loanDliaKumaID,
        clientID: ClientInvisibleNeckTechnologiesID,
        amount: 100,
        paymentDate: new Date("2025-04-01T11:30:32.214+03:00"),
      },
      {
        loanTypeID: loanDliaKumaID,
        clientID: ClientOurFlowersIntID,
        amount: 333,
        paymentDate: new Date("2025-05-01T11:30:32.214+03:00"),
      },
      {
        loanTypeID: loanDliaKumaID,
        clientID: ClientWorldWideSanctionsDeliveryID,
        amount: 400,
        paymentDate: new Date("2025-06-01T11:30:32.214+03:00"),
      },
      {
        loanTypeID: loanDliaKumaID,
        clientID: ClientCardDealerID,
        amount: 5000,
        paymentDate: new Date("2025-07-01T11:30:32.214+03:00"),
      },
      {
        loanTypeID: loanNeDliaKumaID,
        clientID: ClientSuspiciousSharaghaID,
        amount: 1,
        paymentDate: new Date("2025-08-01T11:30:32.214+03:00"),
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};

seedDB();

// const router = express.Router();

app.get('/', async (req, res) => {
  try {
    const typesOfLoan = await LoanType.find();
    res.json({typesOfLoan});
  } catch (err) {
    console.error(err);
    res.status(500).json({error: "Server error"});
  }
}) 

app.listen(PORT, ()=> {
  console.log('Server is running');
})
