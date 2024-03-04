<script lang="ts">
	import ButtonWithShortcut from '$lib/components/ButtonWithShortcut.svelte';
</script>

<ButtonWithShortcut customShortcut="Ctrl+Shift+Enter" handleClick={() => alert('hi')}>
	<h1>thing</h1>
</ButtonWithShortcut>
