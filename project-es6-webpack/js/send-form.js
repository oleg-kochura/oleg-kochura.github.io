import { $on, qs } from './helpers'

export default class SendForm {
	constructor(element, template, store){
		this.domElement  = element;
		this.template = template;
		this.store = store;
		this.init();
	}

	init() {
		this.domList = qs('.items-list', this.domElement);
		$on('go', this.domElement, this.refresh.bind(this));
		$on('click', this.domList, this.removeItem.bind(this))
	}

	refresh() {
		this.domList.innerHTML = this.template.templateOutput(this.store.data);
		this.counter();
	}

	removeItem(event) {
		if (event.target.tagName ===  "INPUT") {             //check if we click on trash-bin button
			let i = +event.target.parentNode.dataset.index;

			this.store.remove(this.store.data[i]);
			this.refresh();
		}
	}

	counter() {
		qs('.counter', this.domElement).innerHTML = this.store.data.length;
	}
}