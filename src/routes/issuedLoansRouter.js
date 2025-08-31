import { Router } from 'express';

const issuedLoansRouter = Router();

issuedLoansRouter.get('/issuedLoans', (req, res) => res.send('All issued loans'));
issuedLoansRouter.get('/issuedLoans/:id', (req, res) => res.send(`Return issued loan by their ID`));
issuedLoansRouter.post('/issuedLoans', (req, res) => res.send('Create loan'));
issuedLoansRouter.put('/issuedLoans/:id', (req, res) => res.send('Update info about an issued loan'));
issuedLoansRouter.delete('/issuedLoans/:id', (req, res) => res.send('Delete a loan'));

export default issuedLoansRouter;
