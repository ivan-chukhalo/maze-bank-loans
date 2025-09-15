import { Router } from 'express';
import {getAllPaymentREcords, getPaymentRecordByID, addPaymentRecord, editPaymentRecord, deletePaymentRecord} from '../controllers/paymentsController.js';

const paymentsRouter = Router();

paymentsRouter.get('/', getAllPaymentREcords);
paymentsRouter.get('/:id', getPaymentRecordByID);
paymentsRouter.post('/', addPaymentRecord);
paymentsRouter.put('/:id', editPaymentRecord);
paymentsRouter.delete('/:id', deletePaymentRecord);

export default paymentsRouter;
