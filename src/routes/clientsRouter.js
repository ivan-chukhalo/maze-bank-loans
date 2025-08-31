import { Router } from "express";

const clientRouter = Router();

clientRouter.get('/clients', (req, res) => res.send('All clients'));
clientRouter.get('/clients/:id', (req, res) => res.send(`Return client by their ID`));
clientRouter.post('/clients', (req, res) => res.send('Create new client'));
clientRouter.put('/clients/:id', (req, res) => res.send('Update info about a client recived ID'));
clientRouter.delete('/clients/:id', (req, res) => res.send('Delete the client with ID'));
