<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import { title } from '$lib/stores';
</script>

<AppBar
	background="bg-surface-50-900-token"
	border="border-b border-surface-500/30"
	shadow="shadow-md"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<a href="/home" class="h3 font-bold">RAISE</a>
	</svelte:fragment>
	{$title}
	<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
</AppBar>
