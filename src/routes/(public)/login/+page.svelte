<script lang="ts">
	import IconTablerLogin2 from 'virtual:icons/tabler/login-2';
	import { title } from '$lib/stores';
	title.clear();
</script>

<div class="flex min-h-screen">
	<div class=" hidden items-center justify-center md:flex md:w-1/2">
		<div class="text-center">
			<h1 class="h1 mb-6">Welcome to RAISE!</h1>
			<p class="text-gray text-lg">Glad to see you here. Please log in to continue.</p>
		</div>
	</div>
	<div class="flex w-full items-center justify-center md:w-1/2">
		<form class="card p-10 shadow-2xl" novalidate>
			<h4 class="h4 text-center">Login to RAISE</h4>

			<label class="label my-4">
				<span> Email </span>
				<input
					type="email"
					name="email"
					placeholder="Email"
					class="input"
					required
					data-testid="inputEmail"
				/>
			</label>
			<label class="label">
				<span>Password</span>
				<input
					type="password"
					name="password"
					placeholder="Password"
					class="input"
					data-testid="inputPassword"
					required
				/>
			</label>
			<a href="/home" class="variant-filled btn mt-6 w-full" data-testid="buttonLogin">
				<span>
					<IconTablerLogin2 />
				</span>
				<span> Sign In </span>
			</a>

			<hr class="my-6 border-t" />

			<a href="/home" class="variant-filled btn w-full" data-testid="buttonLoginWithMicrosoft">
				<span>
					<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"
						><path fill="#f35325" d="M0 0h10v10H0z" /><path
							fill="#81bc06"
							d="M11 0h10v10H11z"
						/><path fill="#05a6f0" d="M0 11h10v10H0z" /><path
							fill="#ffba08"
							d="M11 11h10v10H11z"
						/></svg
					>
				</span>
				<span>Login with M365</span>
			</a>
		</form>
	</div>
</div>
