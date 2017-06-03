import { ArticleItem } from './article-item';

export class Store {
	constructor(data) {
		this.data = this.getData(data);
		this.selected = [];
	}

	getData(data) {
		let transformedData = {};

		Object.keys(data).forEach((key) => {
			transformedData[key] = data[key].items.map( (item, i) => {
				return new ArticleItem(item, i, key)
			});
		});

		return transformedData;
	}

	add(data) {
		this.selected.push(data);
	}

	remove(data) {
		let index = this.selected.findIndex(item => data === item);

		if(index !== undefined && index !== -1) {
			this.selected.splice(index, 1);
			this.data[data.type][data.id].checked = false;
		}
	}

	toggleItem(i, key) {
		this.data[key][i].checked
			? this.add(this.data[key][i])
			: this.remove(this.data[key][i]);
	}

	toggleAll(key) {
		let state = this.itemsState(key);

		this.data[key]
			.filter((item) => item.checked === state)
			.forEach((item) => {
				item.checked = !item.checked;
				state ? this.remove(item) : this.add(item);
			});
	}

	itemsState(key) {
		return this.data[key].every(item => item.checked);
	}

}