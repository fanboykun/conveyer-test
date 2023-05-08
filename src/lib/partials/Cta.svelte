<script>
    // import Making1 from '$lib/images/making-1.jpg'
    // import Making2 from '$lib/images/making-2.jpg'
    // import Making3 from '$lib/images/making-3.jpg'
  import Button from '../components/Button.svelte';
</script>
<section>
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="text-base text-zinc-600 sm:text-lg">
            <h2 class="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">Find The <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"> Best For You</span>, Don't Heshitate!</h2>
            <p class="mb-4">Veniam nostrud enim ea veniam veniam amet esse quis pariatur reprehenderit sit excepteur id ullamco. Qui qui eiusmod ut cillum adipisicing occaecat anim cupidatat enim tempor sint ea incididunt. Qui veniam do et ad nulla proident ex quis dolor commodo reprehenderit. Ex minim cillum aliqua nulla cillum adipisicing ut.</p>
            <div class="flex gap-x-4">
                <a href="/product" class="text-sm">
                    <Button title={'Our Product'} type={'button'} />
                </a>
                <a href="/about" class="text-base mt-2 font-bold text-purple-500/80">
                  More About Us <span aria-hidden="true">→</span>
                </a>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="/images/making-1.jpg" alt="office content 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/images/making-3.jpg" alt="office content 2">
        </div>
    </div>
</section>