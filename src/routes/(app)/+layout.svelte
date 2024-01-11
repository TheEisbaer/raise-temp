<script lang="ts">
	import { AppBar, AppShell, Avatar } from '@skeletonlabs/skeleton';
	import { title } from '$lib/stores';
	import Sidebar from './Sidebar.svelte';
</script>

<AppShell slotSidebarLeft="w-1/4  xl:w-1/6">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="/home" class="h2 font-bold">RAISE</a>
			</svelte:fragment>
			<h3 class="h3">{$title}</h3>
			<svelte:fragment slot="trail">
				<Avatar
					border="border-4 border-surface-300-600-token hover:!border-primary-500"
					width="w-12"
					initials="RA"
				></Avatar>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment>
	<slot />
</AppShell>
