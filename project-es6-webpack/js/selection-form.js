import { $on, bindModelInput, qs } from './helpers'
import { dispatcher } from './dispatcher'

export class SelectionForm {
	constructor(element, template, store) {
		this.domElement = element;
		this.template = template;
		this.store = store;
		this.type = this.domElement.id;
		this.items = this.store.data[this.type];
		this.init();
	}

	init() {
		this.render();
		let chekboxArr = this.domElement.querySelectorAll('.checkbox');
		this.toggleButton = qs('.add-all', this.domElement);
		this.handleEvents();

		this.items.forEach( (item, i) => {
			bindModelInput(item, 'checked', chekboxArr[i])
		});
	}

	render() {
		qs('.list-group', this.domElement).innerHTML = this.template.inputTmpl(this.items);
	}

	handleEvents() {
		$on('change', this.domElement, this.toggleCheckbox.bind(this));
		$on('click', this.toggleButton, this.toggleAll.bind(this));
		dispatcher.addListener('onDelete', this.setToggleButtonState.bind(this));
	}

	toggleCheckbox(event) {
		let index = event.target.dataset.id;
		this.store.toggleItem(index, this.type);

		this.setToggleButtonState();
		dispatcher.dispatch('onToggle');
	}

	toggleAll() {
		this.store.toggleAll(this.type);

		this.setToggleButtonState();
		dispatcher.dispatch('onToggle');
	}

	setToggleButtonState() {
		if (this.store.itemsState(this.type)) {
			this.toggleButton.value = 'REMOVE ALL';
		} else {
			this.toggleButton.value = 'ADD ALL';
		}
	}
}