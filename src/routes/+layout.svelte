<script>
	import './app.css';
	import Backdrop from "../lib/partials/Backdrop.svelte";
	import Header  from "$lib/partials/Header.svelte";
</script>

<div class="app">

	<main>
		<div>
			<Backdrop />
			<div class="relative">
				<Header />
				<slot />
			</div>
		</div>
	</main>

</div>
