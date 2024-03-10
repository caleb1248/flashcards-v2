<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import IconButton from '../IconButton.svelte';

	export let closeButton: boolean = false;

	const dialogContext = getContext('dialog') as { open: Writable<boolean> };
	if (!dialogContext) {
		throw new Error('No dialog context found');
	}

	const { open } = dialogContext;
</script>

<div class="dialog-header">
	<div class="dialog-title" style="flex-grow: 1">
		<slot />
	</div>
	{#if closeButton}
		<IconButton on:click={() => open.set(false)}
			><svg
				class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-m9simb"
				viewBox="0 0 24 24"
				width="30"
				height="30"
				><path
					d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
					fill="white"
				></path></svg
			></IconButton
		>
		>
	{/if}
</div>

<style>
	.dialog-header {
		display: flex;
		align-items: center;
	}

	.dialog-title {
		font-size: 2rem;
		display: flex;
	}
</style>
