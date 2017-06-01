export function bindModelInput(obj, property, domElem) {
	Object.defineProperty(obj, property, {
		get: () => domElem.checked,
		set: (newValue) => domElem.checked = newValue,
		configurable: true
	});
}

export function $on(event, element, callback) {
	element.addEventListener(event, callback);
}

export function qs(selector, scope) {
	return (scope || document).querySelector(selector);
}


// export dispatcher