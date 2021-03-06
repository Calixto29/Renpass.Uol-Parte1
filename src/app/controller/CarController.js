const CarService = require('../service/CarService');

class CarController {
  async create(req, res) {
    try {
      const result = await CarService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async listCar(req, res) {
    const payload = req.query;
    try {
      const result = await CarService.listCar(payload);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async listCarId(req, res) {
    try {
      const result = await CarService.listCarId(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async putCar(req, res) {
    try {
      const result = await CarService.putCar(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }

  async deleteCar(req, res) {
    // const peyload = req.query
    try {
      // const result = await CarService.deleteCar(req.params.id);
      return res.status(204).json();
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
}

module.exports = new CarController();
