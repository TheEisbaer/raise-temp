<script lang="ts">
	import { title } from '$lib/stores';
	$title = 'Administration - Admin';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form class="card grid grid-cols-3 gap-4 p-4" method="POST" use:enhance>
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

<style>
	.input {
		border-radius: var(--theme-rounded-container);
	}
</style>
