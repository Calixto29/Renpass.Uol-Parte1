class IdCarNotFound extends Error {
  constructor() {
    super();
    this.error = 'Car ID not found';
    this.soluction = 'check Car ID and try again';
  }
}

module.exports = IdCarNotFound;
