<!--svelte-ignore-->

<script lang="ts">
	import { AnimatePresence, Motion, type Variants } from 'svelte-motion';
	import type { Writable } from 'svelte/store';
	export let open: Writable<boolean>;
	open.subscribe((value) => console.log(value));

	const isDark = true;
	const modalVariants: Variants = {
		open: { opacity: 1, y: 0 },
		closed: { opacity: 0, y: '-100%' }
	};
</script>

<AnimatePresence show={$open}>
	<Motion let:motion exit={{ opacity: 0 }}>
		<div class="modal-backdrop" on:click={() => open.set(false)} use:motion>
			<Motion
				let:motion
				variants={modalVariants}
				style={{ translateX: '-50%', translateY: '-50%' }}
				initial="closed"
				animate="open"
				transition={{
					duration: 0,
					type: 'spring',
					damping: 20,
					stiffness: 400
				}}
				exit="closed"
			>
				<div class="modal" on:click|stopPropagation use:motion>
					<slot />
				</div>
			</Motion>
		</div>
	</Motion>
</AnimatePresence>

<style>
	.modal {
		position: fixed;
		top: 50%;
		left: 50%;
		width: 300px;
		height: 300px;
		border-radius: 20px;
		padding: 1rem;
		background-color: #222;
		border: 1px solid #333;
	}

	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		backdrop-filter: blur(2px);
	}
</style>
