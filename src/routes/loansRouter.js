import { Router } from 'express';
import {getLoans, getLoanById, createLoan, updateLoan, deleteLoan} from '../controllers/loansController.js';

const loansRouter = Router();

loansRouter.get('/', getLoans);
loansRouter.get('/:id', getLoanById);
loansRouter.post('/', createLoan);
loansRouter.put('/:id', updateLoan);
loansRouter.delete('/:id', deleteLoan);

export default loansRouter;
