const {
    getAllClients,
    getClientById,
    getClientByEmail,
    createClient,
    updateClient
  } = require('./clients.service');
  
  
  async function handlerAllClients(req, res) {
    res.json(await getAllClients());
  }
  
  async function handlerClientById(req, res) {
    try {
      const { id } = req.params;
      const client = await getClientById(id);
      return res.status(200).json(client);
    } catch (error) {
      return res.status(404).json({ message: `Client not found with id: ${id}` });
    }
  }
  
  async function handlerClientByEmail(req, res) {
    try {
      const client = await getClientByEmail(req.user.email);
      return res.status(200).json(client);
    } catch (error) {
      return res.status(404).json({ message: 'Information not found' });
    }
  }