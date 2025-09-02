import BankClient from "../models/BankClient.js";

// GET: return all clients
export const getAllClients = async (req, res) => {
  try {
    const clients = await BankClient.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET: return client by their ID
export const getClientByID = async (req, res) => {
  try {
    const clientID = req.params.id;
    const theClient = await BankClient.findById(clientID);
    res.json(theClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

