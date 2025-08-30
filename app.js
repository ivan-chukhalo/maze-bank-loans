import express from "express";
import dotenv from "dotenv";
import seedDB from "./src/seed/seedDB.js"

import LoanType from "./src/models/LoanType.js";

dotenv.config(); // Load environment variables from .env
const PORT = process.env.PORT || 3000;

const app = express();

seedDB();

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
