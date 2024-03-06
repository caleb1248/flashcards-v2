<!--svelte-ignore a11y-->

<script lang="ts">
	import { Motion } from 'svelte-motion';

	export let open = true;

	const isDark = true;
</script>

<div
	class="fixed inset-0{open ? ' block' : ' hidden'} backdrop-blur-sm{isDark
		? ' bg-neutral-800'
		: ''}"
></div>
<Motion let:motion initial={{ scale: 0.5 }} animate={{ scale: 1, type: 'spring' }}>
	<div id="dialog" class={isDark ? ' bg-neutral-800' : ''}><slot /></div>
</Motion>

<style>
	div#dialog {
		@apply fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
	}
</style>
