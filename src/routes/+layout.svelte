<script>
	import '../app.pcss';
	import { title } from '$lib/stores';
</script>

<svelte:head>
	<title>{$title}</title>
</svelte:head>

<slot />
