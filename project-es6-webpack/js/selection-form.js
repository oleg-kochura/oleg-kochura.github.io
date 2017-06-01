import { $on, bindModelInput, qs } from './helpers'
import ArticleItem from './article-item';

export default class SelectionForm {
	constructor(data, element, template, store) {
		this.domElement = element;
		this.items = data.items.map( (item, index) => {
			return	new ArticleItem(item, index, this.domElement.id)
		});
		this.template = template;
		this.store = store;
		this.init();
	}

	init() {
		this.toggleButton = qs('.add-all', this.domElement);
		this.customEvent = new Event('go');
		this.render();
		this.handleEvents();
		let chekboxArr = this.domElement.querySelectorAll('.checkbox');
		this.items.forEach( (item, i) => {
			bindModelInput(item, 'checked', chekboxArr[i])
		});
	}

	render() {
		qs('.list-group', this.domElement).innerHTML = this.template.template(this.items);
	}

	handleEvents() {
		$on('change', this.domElement, this.toggleCheckbox.bind(this));
		$on('click', this.toggleButton, this.toggleAll.bind(this));
	}

	toggleCheckbox(event) {
		let i = event.target.dataset.id;

		this.items[i].checked
			? this.store.add(this.items[i])
			: this.store.remove(this.items[i]);

		this.getAllCheckboxesState()
			? this.toggleButton.value = 'REMOVE ALL'
			: this.toggleButton.value = 'ADD ALL';

		sendLetter.dispatchEvent(this.customEvent);
	}

	toggleAll() {
		if (this.getAllCheckboxesState()) {
			this.items.forEach(item => {
				item.checked = false;
				this.store.remove(item);
			});
			this.toggleButton.value = 'ADD ALL';

		} else if (!this.getAllCheckboxesState()) {
			this.items.forEach(item => {
				item.checked = true;
				this.store.add(item);
			});
			this.toggleButton.value = 'REMOVE ALL';
		}

		sendLetter.dispatchEvent(this.customEvent);
	}

	getAllCheckboxesState() {
		return this.items.every(item => item.checked)
	}
}