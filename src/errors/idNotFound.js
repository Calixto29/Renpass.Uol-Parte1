class IdNotFound extends Error {
	constructor() {
		super();
		this.name = "IdNotFound";
		this.status = 400;
		this.message = [
			{
				message: this.name, 
				details: [{	message: "This id was not found"}]}];
	}
}

module.exports = IdNotFound;