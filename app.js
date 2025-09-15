import express from "express";
import dotenv from "dotenv";
import seedDB from "./src/seed/seedDB.js"

import clientsRouter from "./src/routes/clientsRouter.js";
import loanRouter from './src/routes/loansRouter.js'
import issuedLoansRouter from './src/routes/issuedLoansRouter.js'
import paymentsRouter from './src/routes/paymentsRouter.js'

dotenv.config(); // Load environment variables from .env
const PORT = process.env.PORT || 3000;

const app = express();

seedDB();

app.use(express.json());

app.use('/clients', clientsRouter);
app.use('/loans', loanRouter);
app.use('/issuedLoans', issuedLoansRouter);
app.use('/payments', paymentsRouter);

app.listen(PORT, ()=> {
  console.log('Server is running');
})
