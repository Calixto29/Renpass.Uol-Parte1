const FleetService = require('../service/FleetService');

class FleetController {
  async create(req, res) {
    try {
      const result = await FleetService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async listFleet(req, res) {
    const payload = req.query;
    try {
      const result = await FleetService.listFleet(payload);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async listFleetId(req, res) {
    try {
      const result = await FleetService.listFleetId(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async putFleet(req, res) {
    try {
      const result = await FleetService.putFleet(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async deleteFleet(req, res) {
    try {
      // const result = await FleetService.deleteFleet(req.params.id);
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new FleetController();
