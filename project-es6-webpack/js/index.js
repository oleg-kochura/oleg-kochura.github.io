import Data from './data';
import Store from './store';
import SelectionForm from './selection-form';
import SendForm from './send-form';
import Template from  './template';
import { qs } from './helpers'


window.onload = function () {

	const documentsEl = qs('.documents');
	const linksEl = qs('.links');
	const labsEl = qs('.labs');
	const sendFormEl = qs('.send-letter');

	const data = new Data().data;
	const store = new Store(data);
	const template = new Template();

	const documents = new SelectionForm(documentsEl, template, store);
	const links = new SelectionForm(linksEl, template, store);
	const labs = new SelectionForm(labsEl, template, store);
	const sendForm = new SendForm(sendFormEl, template, store);
};