import { Router } from 'express';
import {getLoans, getLoanByID, createNewLoanType, editLoanType, deleteLoanType} from '../controllers/loansController.js';

const loansRouter = Router();

loansRouter.get('/', getLoans);
loansRouter.get('/:id', getLoanByID);
loansRouter.post('/', createNewLoanType);
loansRouter.put('/:id', editLoanType);
loansRouter.delete('/:id', deleteLoanType);

export default loansRouter;
