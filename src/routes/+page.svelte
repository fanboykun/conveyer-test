<script>
  import Slider from "../lib/partials/Slider.svelte";
  export let data
</script>
<svelte:head>
  <title>Test</title>
</svelte:head>
<div>
  <Slider products={data.products}/>  
</div>
