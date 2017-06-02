export default class Template {
	template(items) {
		return	items.reduce((prev, curr) => prev +
					`<li class="list-item">
						<label>
							<input type="checkbox" class="checkbox" tabindex="0" data-id="${curr.id}">
							<span class="item-title">${curr.selected.title}</span><br>
							<span>${curr.selected.subtext}</span>
						</label>
					</li>`, '');
	}

	templateOutput(items) {
		return	items.reduce((prev, curr, index) => prev +
					`<li class="icon-result" data-index="${index}" data-type="${curr.type}">${curr.selected.title} - ${curr.selected.subtext}
						<input type="button" class="trash-bin" tabindex="0">
					</li>`, '');
	}
}