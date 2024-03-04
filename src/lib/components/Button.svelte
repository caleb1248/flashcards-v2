<script lang="ts">
	import { Motion } from 'svelte-motion';
</script>

<Motion let:motion whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
	<button {...$$restProps} use:motion>
		<slot />
	</button>
</Motion>
