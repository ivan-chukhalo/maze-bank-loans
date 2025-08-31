import { Router } from 'express';

const paymentsRouter = Router();

paymentsRouter.get('/', (req, res) => res.send('All payments'));
paymentsRouter.get('/:id', (req, res) => res.send(`Return the payment by its ID`));
paymentsRouter.post('/', (req, res) => res.send('Add new payment to the records'));
paymentsRouter.put('/:id', (req, res) => res.send('Update info about the payment'));
paymentsRouter.delete('/:id', (req, res) => res.send('Delete payment record'));

export default paymentsRouter;
