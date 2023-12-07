import { writable, derived } from 'svelte/store';

interface Entry {
    name: string,
    tally: number,
}

export const apiData = writable<Entry[]>([]);

export const names = derived(apiData, ($apiData) => {
    return $apiData.map((entry) => entry.name);
})