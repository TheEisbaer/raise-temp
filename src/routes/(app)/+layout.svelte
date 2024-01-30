<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from './Sidebar.svelte';
	import AppBar from './AppBar.svelte';
</script>

<!-- App Shell -->
<AppShell
	slotSidebarLeft="bg-surface-50-900-token lg:w-auto bg-surface-50-900-token shadow-md scrollBarGutterClass"
	slotFooter="bg-black p-4"
>
	<!-- Header -->
	<svelte:fragment slot="header">
		<AppBar />
	</svelte:fragment>

	<!-- Sidebar (Left) -->
	<svelte:fragment slot="sidebarLeft">
		<Sidebar class="hidden w-[250px] overflow-hidden will-change-scroll lg:grid" />
	</svelte:fragment>

	<!-- Page Content -->
	<slot />
</AppShell>
