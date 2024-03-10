<script lang="ts">
	import { Dialog, DialogTitle } from '$lib/components/Dialog';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let modalOpen = writable(false);
	modalOpen.subscribe((value) => console.log(value));

	const decks = writable<string[]>([]);

	onMount(() => {
		const deckz = localStorage.getItem('decks');
		if (!deckz) {
			$decks = [];
		} else {
			$decks = JSON.parse(deckz) as string[];
		}

		const unsubscribe = decks.subscribe((value) => {
			localStorage.setItem('decks', JSON.stringify(value));
		});

		return () => unsubscribe();
	});

	function createNewDeck() {}
</script>

<h1>Your decks</h1>

{#each $decks as deck}
	<a href="/editor/{deck}">{deck}</a>
{/each}
<button on:click={() => modalOpen.set(true)}>Create new deck</button>
<Dialog open={modalOpen} style="w">
	<DialogTitle closeButton={true}>Create new deck</DialogTitle>
</Dialog>
