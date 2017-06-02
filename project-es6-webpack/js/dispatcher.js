class EventDispatcher {
	constructor () {
		this.events = {};
	}

	addListener(event, callback) {
		if (this.events[event] === undefined) {
			this.events[event] = {
				listeners: []
			}
		}

		this.events[event].listeners.push(callback);
	}

	dispatch(event, details) {
		if (this.events[event] === undefined) {
			console.error(`This event: ${event} does not exist`);
			return false;
		}

		this.events[event].listeners.forEach((listener) => {
			listener(details);
		});
	}
}

export const dispatcher = new EventDispatcher();