<script lang="ts">
	import type { DataHandler, Field } from '@vincjo/datatables';
	export let handler: DataHandler;
	export let orderBy: Field<any>;

	const identifier = orderBy?.toString();
	const sorted = handler.getSort();
</script>

<th
	on:click={() => {
		handler.sort(orderBy, identifier);
	}}
	class:active={$sorted.identifier === identifier}
	class:table-sort-asc={$sorted.direction === 'asc' && $sorted.identifier === identifier}
	class:table-sort-dsc={$sorted.direction === 'desc' && $sorted.identifier === identifier}
	class:table-sort-none={$sorted.identifier !== identifier}
	class="cursor-pointer hover:bg-surface-hover-token"
>
	<slot />
</th>

<style>
	::after {
		float: inline-end;
		width: 16px;
	}

	.table-sort-none::after {
		opacity: 0.5;
		--tw-content: '↓↑' !important;

		content: var(--tw-content) !important;
	}
</style>
