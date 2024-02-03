<script lang="ts">
	import Th from '$components/datatable/Th.svelte';
	import { title } from '$lib/stores';
	import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton';

	import { DataHandler } from '@vincjo/datatables';
	import { blur, draw, fade, fly, slide } from 'svelte/transition';
	$title = 'Administration - Admin';

	type Form = {
		formId: number;
		formName: string;
		formType: string;
		client: string;
		countrySite: string;
	};

	const columns = [
		{ key: 'formId', name: 'ID' },
		{ key: 'formName', name: 'Form Name' },
		{ key: 'formType', name: 'Form Type' },
		{ key: 'client', name: 'Client' },
		{ key: 'countrySite', name: 'Country / Site' }
	];

	const data: Form[] = [
		{
			formId: 1,
			formName: 'Form 1',
			formType: 'Assessment',
			client: 'Bamamazon',
			countrySite: 'USA'
		},
		{
			formId: 2,
			formName: 'Form 2',
			formType: 'Audit',
			client: 'Abolt',
			countrySite: 'UK'
		}
	];

	let paginationSettings = {
		page: 0,
		limit: 1,
		size: data.length,
		amounts: [1, 2, 5, 10]
	} satisfies PaginationSettings;

	const handler = new DataHandler(data, { rowsPerPage: paginationSettings.limit });
	const rows = handler.getRows();
	const rowsPerPage = handler.getRowsPerPage();
</script>

<form class="card grid grid-cols-3 gap-4 p-4">
	<label class="label">
		<span>Form Name</span>
		<input type="text" class="input" name="formName" placeholder="Form Name" />
	</label>
	<label class="label">
		<span>Form Type</span>
		<select class="select">
			<option selected hidden>Select</option>
			<option value="assessment">Assessment</option>
			<option value="audit">Audit</option>
		</select>
	</label>
	<label class="label">
		<span>Form ID</span>
		<input type="text" class="input" placeholder="Form ID" />
	</label>
	<label class="label">
		<span>Client</span>
		<select class="select">
			<option selected hidden>Select</option>
			<option value="amazon">Amazon</option>
			<option value="Bolt">Bolt</option>
		</select>
	</label>
	<label class="label">
		<span>Country/Site</span>
		<select class="select">
			<option selected hidden>Select</option>
			<option value="germany">Germany</option>
		</select>
	</label>
	<label class="label">
		<span>LOB/Sub-LOB</span>
		<select class="select">
			<option selected hidden>Select</option>
			<option value="test">Test</option>
			<option value="anotherTest">Another Test</option>
		</select>
	</label>
	<div class="col-end-4 place-self-end">
		<button class="variant-filled-secondary btn" type="reset">Reset</button>
		<button class="variant-filled-primary btn" type="submit">Search</button>
	</div>
</form>

<div class="table-container py-4">
	<table class="table table-hover">
		<thead>
			<tr>
				{#each columns as column}
					<Th {handler} orderBy={column.key}>
						{column.name}
					</Th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each $rows as row, i}
				<tr transition:fade={{ duration: 200 }}>
					<td>{row.formId}</td>
					<td>{row.formName}</td>
					<td>{row.formType}</td>
					<td>{row.client}</td>
					<td>{row.countrySite}</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="py-4">
		<Paginator
			bind:settings={paginationSettings}
			showFirstLastButtons={true}
			showPreviousNextButtons={true}
			on:amount={({ detail }) => {
				$rowsPerPage = detail;
			}}
			on:page={({ detail }) => {
				handler.setPage(detail + 1);
			}}
		/>
	</div>
</div>

<style>
	.input {
		border-radius: var(--theme-rounded-container);
	}
</style>
