<script lang="ts">
	import { title } from '$lib/stores';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	$title = 'Home';

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
</script>

<div class="flex h-full items-start justify-center bg-gray-100 pt-[10%] dark:bg-gray-900">
	<div class="flex space-x-4 px-16">
		<!-- Card for Responsibility -->
		<div class="card card-hover bg-blue-100 p-4 shadow dark:bg-blue-800">
			<p class="text-center text-2xl font-bold text-blue-800 dark:text-blue-100">
				R<span class="font-normal">esults</span>
			</p>
			<p class="text-center text-sm text-blue-600 dark:text-blue-200">
				Driven to showcase results that may or may not happen, but we'll talk about them like
				they're already legendary
			</p>
		</div>

		<!-- Card for Accountability -->
		<div class="card card-hover bg-green-100 p-4 shadow dark:bg-green-800">
			<p class="text-center text-2xl font-bold text-green-800 dark:text-green-100">
				A<span class="font-normal">mbitious</span>
			</p>
			<p class="text-center text-sm text-green-600 dark:text-green-200">
				Driven to set our goals just above average, because aiming too high is so last season
			</p>
		</div>

		<!-- Card for Integrity -->
		<div class="card card-hover bg-yellow-100 p-4 shadow dark:bg-yellow-800">
			<p class="text-center text-2xl font-bold text-yellow-800 dark:text-yellow-100">
				I<span class="font-normal">mprove</span>
			</p>
			<p class="text-center text-sm text-yellow-600 dark:text-yellow-200">
				Driven to enhance and sustain our efforts with the efficiency of a slightly confused
				goldfish
			</p>
		</div>

		<!-- Card for Service -->
		<div class="card card-hover bg-red-100 p-4 shadow dark:bg-red-800">
			<p class="text-center text-2xl font-bold text-red-800 dark:text-red-100">
				S<span class="font-normal">ustain</span>
			</p>

			<p class="text-center text-sm text-red-600 dark:text-red-200">
				Driven to consistently exceed expectations as long as they're not too high, and there's a
				snack break involved
			</p>
		</div>

		<!-- Card for Excellence -->
		<div class="card card-hover bg-purple-100 p-4 shadow dark:bg-purple-800">
			<p class="text-center text-2xl font-bold text-purple-800 dark:text-purple-100">
				E<span class="font-normal">xceed</span>
			</p>
			<p class="text-center text-sm text-purple-600 dark:text-purple-200">
				Driven to embrace innovation and foster growth in every situation even if it's just finding
				new ways to procrastinate
			</p>
		</div>
	</div>
</div>
