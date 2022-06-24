class IdRentalNotFound extends Error {
  constructor() {
    super();
    this.error = 'Rental ID not found';
    this.soluction = 'check rental ID and try again';
  }
}

module.exports = IdRentalNotFound;
