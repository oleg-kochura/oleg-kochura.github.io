import Data from './data';
import Store from './store';
import SelectionForm from './selection-form';
import SendForm from './send-form';
import Template from  './template';
import { qs } from './helpers'


window.onload = function () {

	let documentsEl = qs('.documents');
	let linksEl = qs('.links');
	let labsEl = qs('.labs');
	let sendFormEl = qs('.send-letter');

	let data = new Data().data;
	let store = new Store();
	let template = new Template();

	let documents = new SelectionForm(data['documents'], documentsEl, template, store);
	let links = new SelectionForm(data['links'], linksEl, template, store);
	let labs = new SelectionForm(data['labs'], labsEl, template, store);
	let sendForm = new SendForm(sendFormEl, template, store);
};