import { $on, bindModelInput, qs } from './helpers'
import ArticleItem from './article-item';
import { dispatcher } from './dispatcher'


export default class SelectionForm {
	constructor(element, template, store) {
		this.domElement = element;
		this.template = template;
		this.store = store;
		this.init();
	}

	init() {
		this.items = this.getData();
		this.render();

		let chekboxArr = this.domElement.querySelectorAll('.checkbox');
		this.toggleButton = qs('.add-all', this.domElement);
		this.handleEvents();

		this.items.forEach( (item, i) => {
			bindModelInput(item, 'checked', chekboxArr[i])
		});
	}

	getData() {
		return this.store.data[this.domElement.id].items.map( (item, index) => {
			return	new ArticleItem(item, index, this.domElement.id)
		});
	}

	render() {
		qs('.list-group', this.domElement).innerHTML = this.template.template(this.items);
	}

	handleEvents() {
		$on('change', this.domElement, this.toggleCheckbox.bind(this));
		$on('click', this.toggleButton, this.toggleAll.bind(this));
		dispatcher.addListener('onDelete', this.unCheck.bind(this));
	}

	unCheck(item) {
		if (item.type === this.domElement.id) {
			this.items[item.id].checked = false;
		}

		this.setToggleButtonState(this.checkboxesState());
	}

	toggleCheckbox(event) {
		let i = event.target.dataset.id;
		this.items[i].checked
			? this.store.add(this.items[i])
			: this.store.remove(this.items[i]);

		this.setToggleButtonState(this.checkboxesState());
		dispatcher.dispatch('onToggle');
	}

	toggleAll() {
		let state = this.checkboxesState();

		let data = this.items
			.filter((item) => item.checked === state)
			.forEach((item) => {
				item.checked = !item.checked;
				state ? this.store.remove(item) : this.store.add(item);
			});

		this.setToggleButtonState(this.checkboxesState());
		dispatcher.dispatch('onToggle');
	}

	checkboxesState() {
		return this.items.every(item => item.checked)
	}

	setToggleButtonState(state) {
		state ? this.toggleButton.value = 'REMOVE ALL' : this.toggleButton.value = 'ADD ALL';
	}
}