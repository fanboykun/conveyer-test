<script>
  import { onMount } from 'svelte';
  // import Carousel from 'svelte-carousel';
  import { browser } from '$app/environment';
  import Product1 from '$lib/images/product-1.webp'
  import Product2 from '$lib/images/product-2.webp'
  import Product3 from '$lib/images/product-3.webp'
  import Product4 from '$lib/images/product-4.webp'
  import Product5 from '$lib/images/product-5.webp'
  import Product6 from '$lib/images/product-6.webp'
  import Product7 from '$lib/images/product-7.webp'
  import Product8 from '$lib/images/product-8.webp'
  import Product9 from '$lib/images/product-9.webp'
  import Product10 from '$lib/images/product-10.webp'
  let Carousel; // for saving Carousel component class
  onMount(async () => {
      const module = await import('svelte-carousel');
      Carousel = module.default;
    });
  let products = [
    {
      image: Product1,
      class: 'rotate-2'
    },
    {
      image: Product2,
      class: '-rotate-2'
    },
    {
      image: Product3,
      class: 'rotate-2'
    },
    {
      image: Product4,
      class: '-rotate-2'
    },
    {
      image: Product5,
      class: 'rotate-2'
    },
    {
      image: Product6,
      class: '-rotate-2'
    },
    {
      image: Product7,
      class: 'rotate-2'
    },
    {
      image: Product8,
      class: '-rotate-2'
    },
    {
      image: Product9,
      class: 'rotate-2'
    },
    {
      image: Product10,
      class: '-rotate-2'
    }
  ]
  let carousel; // for calling methods of the carousel instance
  let screenSize;

  function handleClick(){
    carousel.goToNext();
  }
</script>
<svelte:window bind:innerWidth={screenSize} />
<div class="mt-16 sm:mt-20 overflow-x-hidden" id="gallery">
  {#if browser}
  <div>
    <svelte:component this={Carousel}
      bind:this={carousel}
      particlesToShow={`${screenSize < 640 ? 1 : 3}`}
      particlesToScroll={1}
      arrows={false}
      dots={false}
      swiping={false}
      let:showPrevPage
      let:showNextPage
      let:loaded>
      {#each products as product, index (product) }
      <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box justify-center">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          {#if loaded.includes(index)}
            <img
              alt="wait"
              loading="lazy"
              width="800"
              height="800"
              decoding="async"
              data-nimg="1"
              class="aspect-square {product.class} rounded-2xl object-cover "
              sizes="(min-width: 1024px) 32rem, 20rem"
              src="{product.image}"
              style="color: transparent;"
            />
          {/if}
        </div>
      </div>
      {/each}
    </svelte:component>
  </div>
  <div class="absolute right-5">
    <button on:click={ handleClick } class="p-2 rounded-full text-fuchsia-600 font-semibold shadow-lg hover:ring-2 ring-lilac-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
      </svg>      
    </button>
  </div>  
  {/if}
</div>

<style>
  .carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    @apply hidden;
  }
}
.carousel {
  @apply flex overflow-x-scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  &-vertical {
    @apply flex-col overflow-y-scroll;
    scroll-snap-type: y mandatory;
  }
  &-item {
    @apply box-content flex flex-none;
    scroll-snap-align: start;
  }
  &-center .carousel-item {
    scroll-snap-align: center;
  }
  &-end .carousel-item {
    scroll-snap-align: end;
  }
}
</style>
