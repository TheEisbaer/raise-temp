<script>
	import '../app.pcss';
	import { title } from '$lib/stores';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<slot />
