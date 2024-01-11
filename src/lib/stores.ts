import { writable } from 'svelte/store';

function createTitle() {
	const { subscribe, set } = writable('RAISE');

	return {
		subscribe,
		set: (value: string) => {
			set(`RAISE - ${value}`);
		},
		clear: () => {
			set('RAISE');
		}
	};
}

export const title = createTitle();
