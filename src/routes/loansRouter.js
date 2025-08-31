import { Router } from 'express';

const loansRouter = Router();

loansRouter.get('/', (req, res) => res.send('Get list of loans the bank provides'));
loansRouter.get('/:id', (req, res) => res.send('Get loan by its id'));
loansRouter.post('/', (req, res) => res.send('Creat a new type of loan'));
loansRouter.put('/:id', (req, res) => res.send('Change loan conditions'));
loansRouter.delete('/:id', (req, res) => res.send('Delete loan type'));

export default loansRouter;
