class ErrorCanDrive extends Error {
  constructor() {
    super();
    this.error = 'This user is not allowed to drive!';
    this.soluction = 'Select a driving-enabled user ID';
  }
}

module.exports = ErrorCanDrive;
