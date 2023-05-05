<script>
  import Hero from "../lib/partials/Hero.svelte";
  import Gallery from "../lib/partials/Gallery.svelte";
  import Features from "../lib/partials/Features.svelte";
  import Cta from "../lib/partials/Cta.svelte";
  import Faq from "../lib/partials/Faq.svelte";
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
  <Cta />
  <Faq />
</div>
