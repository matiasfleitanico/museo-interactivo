import { writable } from 'svelte/store';

export const stream = writable(null);
export const error = writable(null);
export const status = writable(null);
export const route = writable(0);
export const state = writable(0);
