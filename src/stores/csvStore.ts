import { writable } from "svelte/store";

export const csvFileContent = writable<null | string>(null);