import Router from 'express';

const loanTypesRouter = Router();

loanTypesRouter.get('/loans', (req, res) => res.send('Get list of loans the bank provides'));
loanTypesRouter.get('/loans/:id', (req, res) => res.send('Get loan by its id'));
loanTypesRouter.post('/loans', (req, res) => res.send('Creat a new type of loan'));
loanTypesRouter.put('/loans/:id', (req, res) => res.send('Change loan conditions'));
loanTypesRouter.delete('/loans/:id', (req, res) => res.send('Delete loan type'));
