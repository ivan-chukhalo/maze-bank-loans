import { Router } from "express";

const clientsRouter = Router();

clientsRouter.get('/clients', (req, res) => res.send('All clients'));
clientsRouter.get('/clients/:id', (req, res) => res.send(`Return client by their ID`));
clientsRouter.post('/clients', (req, res) => res.send('Create new client'));
clientsRouter.put('/clients/:id', (req, res) => res.send('Update info about a client recived ID'));
clientsRouter.delete('/clients/:id', (req, res) => res.send('Delete the client with ID'));

export default clientsRouter;
