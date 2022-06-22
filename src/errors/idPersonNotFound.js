class IdPersonNotFound extends Error {
	constructor() {
		super();		
		this.error = "Person ID not found"
		this.soluction = "check person ID and try again"};
		
}

module.exports = IdPersonNotFound;