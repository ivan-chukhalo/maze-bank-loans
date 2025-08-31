import { Router } from "express";

const clientsRouter = Router();

clientsRouter.get('/', (req, res) => res.send('All clients'));
clientsRouter.get('/:id', (req, res) => res.send(`Return client by their ID`));
clientsRouter.post('/', (req, res) => res.send('Create new client'));
clientsRouter.put('/:id', (req, res) => res.send('Update info about a client recived ID'));
clientsRouter.delete('/:id', (req, res) => res.send('Delete the client with ID'));

export default clientsRouter;
