import connectDB from "../config/db.js";
// importing data models
import BankClient from "../models/BankClient.js";
import LoanType from "../models/LoanType.js";
import LoanRecord from "../models/LoanRecord.js";
import PaymentRecord from "../models/PaymentRecord.js";
// importing seed data
import { seedClients, seedLoanTypes, seedLoanRecord } from "./seedData.js";

export default async function seedDB() {
  try {
    await connectDB();

    // cleaning up the database. You don't wrap this request with Promise.all() to avoid errors when, for instanse, LoanType is cleaned before LoarRecord
    await BankClient.deleteMany();
    await LoanRecord.deleteMany();
    await LoanType.deleteMany();
    await PaymentRecord.deleteMany();

    // Adding BankClients
    await BankClient.insertMany(seedClients);

    // Adding LoanTypes
    await LoanType.insertMany(seedLoanTypes);

    // Adding LoanRecords
    await LoanRecord.insertMany(seedLoanRecord);

    // Adding PaymentRecords (loanTypes identifiers, clientID identifiers, then inserting records)
    const loanDliaKumaDoc = await LoanType.findOne({ name: "Dlia Kuma" });
    if (!loanDliaKumaDoc) throw new Error("Loan Dlia Kuma not found");
    const loanDliaKumaID = loanDliaKumaDoc._id;

    const loanNeDliaKumaDoc = await LoanType.findOne({ name: "Ne Dlia Kuma" });
    if (!loanNeDliaKumaDoc) throw new Error("Loan Ne Dlia Kuma not found");
    const loanNeDliaKumaID = loanNeDliaKumaDoc._id;

    const ClientExplosiveMusicLabelDoc = await BankClient.findOne({
      name: "Explosive Music Label",
    });
    if (!ClientExplosiveMusicLabelDoc)
      throw new Error("ClientExplosiveMusicLabelDoc not found");
    const ClientExplosiveMusicLabelID = ClientExplosiveMusicLabelDoc._id;

    const ClientInvisibleNeckTechnologiesDoc = await BankClient.findOne({
      name: "Invisible Neck Technologies",
    });
    if (!ClientInvisibleNeckTechnologiesDoc)
      throw new Error("ClientInvisibleNeckTechnologiesDoc not found");
    const ClientInvisibleNeckTechnologiesID =
      ClientInvisibleNeckTechnologiesDoc._id;

    const ClientOurFlowersIntDoc = await BankClient.findOne({
      name: "Our Flowers Int",
    });
    if (!ClientOurFlowersIntDoc)
      throw new Error("ClientOurFlowersIntDoc not found");
    const ClientOurFlowersIntID = ClientOurFlowersIntDoc._id;

    const ClientWorldWideSanctionsDeliveryDoc = await BankClient.findOne({
      name: "World Wide Sanctions Delivery",
    });
    if (!ClientWorldWideSanctionsDeliveryDoc)
      throw new Error("ClientWorldWideSanctionsDeliveryDoc not found");
    const ClientWorldWideSanctionsDeliveryID =
      ClientWorldWideSanctionsDeliveryDoc._id;

    const ClientCardDealerDoc = await BankClient.findOne({
      name: "Card Dealer",
    });
    if (!ClientCardDealerDoc) throw new Error("ClientCardDealerDoc not found");
    const ClientCardDealerID = ClientCardDealerDoc._id;

    const ClientSuspiciousSharaghaDoc = await BankClient.findOne({
      name: "Suspicious Sharagha",
    });
    if (!ClientSuspiciousSharaghaDoc)
      throw new Error("ClientSuspiciousSharaghaDoc not found");
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
}
