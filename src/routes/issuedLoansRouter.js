import { Router } from 'express';

const issuedLoansRouter = Router();

issuedLoansRouter.get('/', (req, res) => res.send('All issued loans'));
issuedLoansRouter.get('/:id', (req, res) => res.send(`Return issued loan by their ID`));
issuedLoansRouter.post('/', (req, res) => res.send('Create loan'));
issuedLoansRouter.put('/:id', (req, res) => res.send('Update info about an issued loan'));
issuedLoansRouter.delete('/:id', (req, res) => res.send('Delete a loan'));

export default issuedLoansRouter;
