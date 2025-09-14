import { Router } from 'express';
import {getAllIssuedLoans, getIssuedLoanByID, createIssuedLoan, editRecordOfIssuedLoan, deleteIssuedLoanRecord} from '../controllers/issuedLoansController.js';

const issuedLoansRouter = Router();

issuedLoansRouter.get('/', getAllIssuedLoans);
issuedLoansRouter.get('/:id', getIssuedLoanByID);
issuedLoansRouter.post('/', createIssuedLoan);
issuedLoansRouter.put('/:id', editRecordOfIssuedLoan);
issuedLoansRouter.delete('/:id', deleteIssuedLoanRecord);

export default issuedLoansRouter;
