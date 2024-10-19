import { writable } from "svelte/store";

export const csvFileContent = writable<null | string>(null);
export const csvHeaders = writable<string[]>([]);
export const transformedCSVHeaders = writable<string[]>([]);