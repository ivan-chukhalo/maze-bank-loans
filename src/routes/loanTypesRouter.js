import { Router } from 'express';

const loanTypesRouter = Router();

loanTypesRouter.get('/', (req, res) => res.send('Get list of loans the bank provides'));
loanTypesRouter.get('/:id', (req, res) => res.send('Get loan by its id'));
loanTypesRouter.post('/', (req, res) => res.send('Creat a new type of loan'));
loanTypesRouter.put('/:id', (req, res) => res.send('Change loan conditions'));
loanTypesRouter.delete('/:id', (req, res) => res.send('Delete loan type'));

export default loanTypesRouter;
