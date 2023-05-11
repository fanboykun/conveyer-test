<script>
	import { useConveyer } from "@egjs/svelte-conveyer";
	import { onMount } from "svelte";
	const { scrollIntoView, ref, onBeginScroll, init: init1, isReachStart, isReachEnd } = useConveyer({autoInit: false});
	onMount(async () => { 
		init1();
	})
  export let products;
  onBeginScroll(() => {
    console.log("begin scroll", isReachStart);
  });
  function next (){
	console.log("next");
	scrollIntoView("end", {align: "start", duration: 500, excludeStand: true});
	// on:click={() => { scrollIntoView("start", {align: "end", duration: 500, excludeStand: true}); }} 
  }
</script>

<div class="mt-16 sm:mt-20">
  <div use:ref class="items flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
	{#each products as product, index (product) }
    <div
      class="item aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
      <img
        alt=""
        class=" inset-0 h-full w-full object-cover"
        src="{product.image}"
      />
    </div>
	{/each}
  </div>
  <div class="absolute right-5">
    <button
		on:click={next} 
		class="next p-2 rounded-full text-fuchsia-600 font-semibold shadow-lg hover:ring-2 ring-lilac-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
      </svg>      
    </button>
  </div>  
</div>
