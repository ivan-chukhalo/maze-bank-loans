import { Router } from 'express';
import {getLoans, getLoanByID, createNewLoan, editLoan, deleteLoan} from '../controllers/loansController.js';

const loansRouter = Router();

loansRouter.get('/', getLoans);
loansRouter.get('/:id', getLoanByID);
loansRouter.post('/', createNewLoan);
loansRouter.put('/:id', editLoan);
loansRouter.delete('/:id', deleteLoan);

export default loansRouter;
