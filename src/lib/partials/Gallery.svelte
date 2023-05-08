<script>
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

  let carousel; // for calling methods of the carousel instance
  console.log(carousel);
  let screenSize;
  let products = [
    {
      image: '/images/product-1.jpg',
      class: 'rotate-2'
    },
    {
      image: '/images/product-2.jpg',
      class: '-rotate-2'
    },
    {
      image: '/images/product-3.jpg',
      class: 'rotate-2'
    },
    {
      image: '/images/product-4.jpg',
      class: '-rotate-2'
    },
    {
      image: '/images/product-5.jpg',
      class: 'rotate-2'
    },
    {
      image: '/images/product-6.jpg',
      class: '-rotate-2'
    },
    {
      image: '/images/product-7.jpg',
      class: 'rotate-2'
    },
    {
      image: '/images/product-8.jpg',
      class: '-rotate-2'
    },
    {
      image: '/images/product-9.jpg',
      class: 'rotate-2'
    },
    {
      image: '/images/product-10.jpg',
      class: '-rotate-2'
    }
  ]
</script>
<svelte:window bind:innerWidth={screenSize} />
<div class="mt-16 sm:mt-20 overflow-x-hidden" id="gallery">
  {#if browser}
  <div>
    <Carousel
      bind:this={carousel}
      particlesToShow={`${screenSize < 640 ? 1 : 3}`}
      particlesToScroll={1}
      let:showPrevPage
      let:showNextPage>
      {#each products as product, index }
      <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        <div class="max-w-xs px-2.5 lg:max-w-none">
            <img
              alt=""
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
        </div>
      </div>
      {/each}
      <button slot="prev" on:click={showPrevPage} class="p-2 rounded-full text-fuchsia-600 font-semibold shadow-lg hover:ring-2 ring-lilac-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
        </svg>      
      </button>
      <button slot="next" on:click={showNextPage} class="p-2 rounded-full text-fuchsia-600 font-semibold shadow-lg hover:ring-2 ring-lilac-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
        </svg>      
      </button>
    </Carousel>
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
