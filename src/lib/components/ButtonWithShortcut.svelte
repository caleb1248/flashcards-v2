<script lang="ts">
	import { onMount } from 'svelte';

	export let customShortcut: string;
	export let handleClick: (this: HTMLButtonElement, ev: MouseEvent) => any;

	let button: HTMLButtonElement;

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	function handleKeyDown(event: KeyboardEvent) {
		const keys = customShortcut.split('+');
		const isCtrl = keys.includes('Ctrl');
		const isShift = keys.includes('Shift');
		const isAlt = keys.includes('Alt');
		const key = keys.pop();

		if (
			event.ctrlKey === isCtrl &&
			event.shiftKey === isShift &&
			event.key === key &&
			event.altKey === isAlt
		)
			button.click();
	}
</script>

<button bind:this={button} on:click={handleClick}><slot /></button>
