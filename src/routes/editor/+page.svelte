<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const decks = writable<string[]>([]);

	$: $decks, localStorage.setItem('decks', JSON.stringify($decks));

	onMount(() => {
		const deckz = localStorage.getItem('decks');
		if (!deckz) {
			$decks = [];
		} else {
			$decks = JSON.parse(deckz) as string[];
		}
	});
</script>

<h1>Your decks</h1>

{#each $decks as deck}
	<a href="/editor/{deck}">{deck}</a>
{/each}
<button>Create new deck</button>
