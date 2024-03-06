<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

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
<button>Create new deck</button>
<Modal>hi</Modal>
