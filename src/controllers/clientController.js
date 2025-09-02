import BankClient from "../models/BankClient.js";

// GET: return all clients
export const getAllClients = async (req, res) => {
    try {
        const clients = await BankClient.find(); 
        res.json(clients);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};