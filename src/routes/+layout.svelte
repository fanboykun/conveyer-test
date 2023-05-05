<script>
	import './app.css';
	import Backdrop from "../lib/partials/Backdrop.svelte";
	import Header  from "$lib/partials/Header.svelte";
  import Footer from '../lib/partials/Footer.svelte';
</script>

<div class="app">

	<main>
		<div>
			<Backdrop />
			<div class="relative">
				<Header />
				<slot />
				<Footer />
			</div>
		</div>
	</main>

</div>
