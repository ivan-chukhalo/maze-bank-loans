import Client from "../models/Client.js";

// GET: return all clients
export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET: return client by their ID
export const getClientByID = async (req, res) => {
  try {
    const clientID = req.params.id;
    const theClient = await Client.findById(clientID);
    res.json(theClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST: add new client to database
export const addClient = async (req, res) => {
  try {
    const { name, phone, contactPerson } = req.body;
    const newClient = new Client({ name, phone, contactPerson });
    await newClient.save();
    res.status(201).json({
      message: `Client ${name} is succesfully created`,
      client: newClient,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT: update client data
export const editClient = async (req, res) => {
  try {
    const clientID = req.params.id;
    const newData = req.body;

    const updatedClient = await Client.findByIdAndUpdate(
      clientID,
      newData,
      {
        new: true,
        upsert: false,
        runValidators: true,
      }
    );

    if (!updatedClient) {
      // mongo returns Null if can't find the client by ID
      res.status(404).json({ message: `Can't find the client` });
    }

    res.json({ message: `Client ${updatedClient.name} updated successfully` });
  } catch (err) {
    res.status(500).json({ error: "Could not edit the client" });
  }
};

// DELETE: delete client from database
export const deleteClient = async (req, res) => {
  try {
    const clientID = req.params.id;
    const deletedClient = await Client.findByIdAndDelete(clientID);
    if (!deletedClient) {
      return res.status(404).json({ message: `Can't find the client` });
    }
    res.json({ message: "Deleted successfully", client: deletedClient });
  } catch (err) {
    res.status(500).json({ message: "Could not delete the client" });
  }
};
