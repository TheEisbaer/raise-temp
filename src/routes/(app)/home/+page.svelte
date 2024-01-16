<script lang="ts">
	import { title } from '$lib/stores';
	$title = 'Home';
</script>

<div class="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
	<div class="flex space-x-4 px-16">
		<!-- Card for Responsibility -->
		<div class="card card-hover bg-blue-100 p-4 shadow dark:bg-blue-800">
			<p class="text-center text-2xl font-bold text-blue-800 dark:text-blue-100">
				R<span class="font-normal">esponsibility</span>
			</p>
			<p class="text-center text-sm text-blue-600 dark:text-blue-200">
				Who needs it? Blame is a sport, and I'm the champion.
			</p>
		</div>

		<!-- Card for Accountability -->
		<div class="card card-hover bg-green-100 p-4 shadow dark:bg-green-800">
			<p class="text-center text-2xl font-bold text-green-800 dark:text-green-100">
				A<span class="font-normal">ccountability</span>
			</p>
			<p class="text-center text-sm text-green-600 dark:text-green-200">
				Why own up when you can pass the blame? It's a team effort in dodging consequences.
			</p>
		</div>

		<!-- Card for Integrity -->
		<div class="card card-hover bg-yellow-100 p-4 shadow dark:bg-yellow-800">
			<p class="text-center text-2xl font-bold text-yellow-800 dark:text-yellow-100">
				I<span class="font-normal">ntegrity</span>
			</p>
			<p class="text-center text-sm text-yellow-600 dark:text-yellow-200">
				Like Bigfoot, people talk about it, but does anyone really know if it exists? Probably not.
			</p>
		</div>

		<!-- Card for Service -->
		<div class="card card-hover bg-red-100 p-4 shadow dark:bg-red-800">
			<p class="text-center text-2xl font-bold text-red-800 dark:text-red-100">
				S<span class="font-normal">ervice</span>
			</p>
			<p class="text-center text-sm text-red-600 dark:text-red-200">
				Servitude is so last century. Let others handle the charity; I'm busy pampering myself.
			</p>
		</div>

		<!-- Card for Excellence -->
		<div class="card card-hover bg-purple-100 p-4 shadow dark:bg-purple-800">
			<p class="text-center text-2xl font-bold text-purple-800 dark:text-purple-100">
				E<span class="font-normal">xcellence</span>
			</p>
			<p class="text-center text-sm text-purple-600 dark:text-purple-200">
				Striving for greatness? Nah, mediocrity is my comfort zone. Why bother with the extra
				effort?
			</p>
		</div>
	</div>
</div>
