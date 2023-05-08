<script>
  import Contact from "../../lib/partials/Contact.svelte";
  import { assets } from '$app/paths';
  // bg-[url(src/lib/images/bg3.jpg)]

  import Bg from '$lib/images/bg3.jpg'
</script>
<svelte:head>
    <title>Aromez | About</title>
</svelte:head>
<section
  class="overflow-hidden lg:bg-cover bg-cover bg-center bg-no-repeat mt-8" style="background-image: url(bg4.jpg);">
  <div class="bg-lilac-900/60 p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
        Our Company
      </h2>

      
      <div class="mt-4 sm:mt-8">
        <p
          class="inline-block max-w-lg text-white text-center md:mt-6 md:text-lg md:leading-relaxed"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          officia corporis quasi doloribus iure architecto quae voluptatum beatae
          excepturi dolores.
        </p>
        <!-- <a
          href="#"
          class="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Yours Today
        </a> -->
      </div>
    </div>
  </div>
</section>
<!-- <Team /> -->
<Contact />
