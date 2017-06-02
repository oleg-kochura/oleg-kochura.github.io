export default class Store {
	constructor(data) {
		this.data = data;
		this.selected = [];
	}

	add(data) {
		this.selected.push(data);
	}

	remove(data) {
		let index = this.selected.findIndex(item => data === item);

		if(index !== undefined && index !== -1) {
			this.selected.splice(index, 1);
		}
	}
}