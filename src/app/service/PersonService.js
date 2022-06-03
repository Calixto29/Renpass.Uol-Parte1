class PersonService{
    create(payload) { // payload = req.body
        const result = PersonRepository.create(payload);
        return result; 
    }
}