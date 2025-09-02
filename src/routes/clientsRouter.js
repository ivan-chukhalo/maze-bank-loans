import { Router } from "express";
import { getAllClients, getClientByID, addClient } from "../controllers/clientController.js";

const clientsRouter = Router();

clientsRouter.get('/', getAllClients);
clientsRouter.get('/:id', getClientByID);
clientsRouter.post('/', addClient);
clientsRouter.put('/:id', (req, res) => res.send('Update info about a client recived ID'));
clientsRouter.delete('/:id', (req, res) => res.send('Delete the client with ID'));

export default clientsRouter;
