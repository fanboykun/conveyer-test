<script>
  import Hero from "../lib/partials/Hero.svelte";
  import Gallery from "../lib/partials/Gallery.svelte";
  import Features from "../lib/partials/Features.svelte";
</script>
<svelte:head>
  <title>Aromez</title>
</svelte:head>
<div>
  <Hero />
  <div class="mt-2">
    <Gallery />
  </div>
  <Features />
</div>
