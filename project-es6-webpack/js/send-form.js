import { $on, qs } from './helpers'
import { dispatcher } from './dispatcher'

export default class SendForm {
	constructor(element, template, store){
		this.domElement  = element;
		this.template = template;
		this.store = store;
		this.init();
	}

	init() {
		this.domList = qs('.items-list', this.domElement);
		$on('click', this.domList, this.removeItem.bind(this));
		dispatcher.addListener('onToggle', this.refresh.bind(this));
	}

	refresh() {
		this.domList.innerHTML = this.template.templateOutput(this.store.selected);
		this.counter();
	}

	removeItem(event) {
		if (event.target.tagName ===  "INPUT") {
			let i = +event.target.parentNode.dataset.index;

			dispatcher.dispatch('onDelete', this.store.selected[i]);

			this.store.remove(this.store.selected[i]);
			this.refresh();
		}
	}

	counter() {
		qs('.counter', this.domElement).innerHTML = this.store.selected.length;
	}
}