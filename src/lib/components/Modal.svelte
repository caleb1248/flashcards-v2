<!--svelte-ignore-->

<script lang="ts">
	import { AnimatePresence, Motion, type Variants } from 'svelte-motion';

	export let open = true;
	export let setOpen: (open: boolean) => void;

	const isDark = true;
	const modalVariants: Variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: '-100%' }
	};
</script>

<AnimatePresence initial={false}>
	{#if open}
		<Motion let:motion exit={{ opacity: 0 }}>
			<div class="modal-backdrop" on:click={() => setOpen(false)}></div>
		</Motion>
	{/if}
</AnimatePresence>
