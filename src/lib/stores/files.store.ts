import type { MarkdownFile } from '$lib/types/markdownfile';
import { writable, type Writable } from 'svelte/store';

export const files: Writable<MarkdownFile[]> = writable([]);
