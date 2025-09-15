import { Router } from "express";
import { getAllClients, getClientByID, addClient, editClient, deleteClient } from "../controllers/clientController.js";

const clientsRouter = Router();

clientsRouter.get('/', getAllClients);
clientsRouter.get('/:id', getClientByID);
clientsRouter.post('/', addClient);
clientsRouter.put('/:id', editClient);
clientsRouter.delete('/:id', deleteClient);

export default clientsRouter;
