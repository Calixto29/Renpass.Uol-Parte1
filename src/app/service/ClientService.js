class ClientService{
    create(payload) { // payload = req.body
        const result = ClientRepository.create(payload);
        return result; 
    }
}