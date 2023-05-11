<script>
	import './app.css';
	import Backdrop from "../lib/partials/Backdrop.svelte";
</script>

<div class="antialiased app">

	<main>
		<div>
			<Backdrop />
			<div class="relative">
				<slot />
			</div>
		</div>
	</main>

</div>
