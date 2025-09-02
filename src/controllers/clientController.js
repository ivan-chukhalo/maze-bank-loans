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

// POST: add new client to database
export const addClient = async (req, res) => {
  try {
    const { name, phone, contactPerson, createdAt } = req.body;
    const newClient = new BankClient({ name, phone, contactPerson, createdAt });
    await newClient.save();
    res
      .status(201)
      .json({
        message: `Client ${name} is succesfully created`,
        client: newClient,
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
