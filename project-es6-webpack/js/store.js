export default class Store {
	constructor() {
		this.data = [];
	}

	add(data) {
		this.data.indexOf(data) === -1 && this.data.push(data); // check if item did not alredy exist in array and push if it is not.
	}

	remove(data) {
		let index = this.data.findIndex(item => data === item);

		if(index !== undefined && index !== -1) {
			this.data.splice(index, 1);
		}
	}

}
