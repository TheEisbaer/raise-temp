<script lang="ts">
	import { AppBar, Avatar, LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { title } from '$lib/stores';

	const avatarPopupSettings: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'bottom'
	};
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
		<a href="/home" class="h3 font-bold" data-testid="linkLogo">RAISE</a>
	</svelte:fragment>
	<h4 class="h4" data-testid="textTitle">
		{$title}
	</h4>
	<svelte:fragment slot="trail">
		<button use:popup={avatarPopupSettings} data-testid="buttonAvatar">
			<Avatar
				width="w-10"
				border="border-4 border-surface-300-600-token hover:!border-primary-500"
				cursor="cursor-pointer"
			/>
		</button>
	</svelte:fragment>
</AppBar>

<div class="card p-4" data-popup="popupClick">
	<p>Click Content</p>
	<div class="arrow bg-surface-100" />
</div>
