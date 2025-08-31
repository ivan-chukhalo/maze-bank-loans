import { Router } from 'express';

const paymentsRouter = Router();

paymentsRouter.get('/payments', (req, res) => res.send('All payments'));
paymentsRouter.get('/payments/:id', (req, res) => res.send(`Return the payment by its ID`));
paymentsRouter.post('/payments', (req, res) => res.send('Add new payment to the records'));
paymentsRouter.put('/payments/:id', (req, res) => res.send('Update info about the payment'));
paymentsRouter.delete('/payments/:id', (req, res) => res.send('Delete payment record'));

export default paymentsRouter;
