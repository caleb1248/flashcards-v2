<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import ButtonUI from '$lib/components/Button.svelte';
	import { Motion } from 'svelte-motion';
	export let data: PageData;

	const deck = new Promise((resolve, reject) => {
		onMount(() => {
			const deck = localStorage.getItem(`deck-${data.id}`);
			if (!deck) {
				reject();
				return;
			}

			resolve(JSON.parse(deck));
		});
	});
</script>

<nav class="p-5 w-full flex gap-2 justify-between">
	<span class="text-2xl">Flascardz</span>
	<Motion let:motion whileHover={{ scale: 1.1 }} transition={{ type: 'spring', duration: 0.2 }}>
		<button class="p-2 rounded bg-neutral-900" use:motion>back</button>
	</Motion>
</nav>
{#await deck}
	loading...
{:then { title, cards }}
	<h1>{title}</h1>
{:catch}
	<h1>deck not found</h1>
{/await}
