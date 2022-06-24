const FleetRepository = require('../repository/FleetRepository');

class FleetService {
  async create(payload) {
    const result = await FleetRepository.create(payload);
    return result;
  }

  async listFleet(payload) {
    const result = await FleetRepository.listFleet(payload);
    return result;
  }

  async listFleetId(payload) {
    const result = await FleetRepository.listFleetId(payload);
    return result;
  }

  async putFleet(id, body) {
    const result = await FleetRepository.putFleet(id, body);
    return result;
  }

  async deleteFleet(payload) {
    const result = await FleetRepository.deleteFleet(payload);
    return result;
  }
}

module.exports = new FleetService();
