import type { Theme } from "$lib/types";
import { writable } from "svelte/store";

export const theme = writable<Theme>("default");