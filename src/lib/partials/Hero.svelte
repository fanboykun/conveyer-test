<script>
  import Button from "../components/Button.svelte";
  import Bg from '$lib/images/logo.png'
</script>
<div class="mx-auto max-w-2xl py-14 sm:py-14 lg:py-16">
  <div class="text-center">
    <div class="flex justify-center">
      <img src="{Bg}" alt="Logo" class="flex w-56 h-40 items-center">
    </div>
    <div class="-mt-12">
      <h1 class="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">Where You Found <span class="underline underline-offset-4 decoration-lilac-600">The Best Essential Perfume</span> </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 mx-4">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    </div>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="#gallery">
          <Button title={'Get started'} type={'button'} />
        </a> 
    </div>
  </div>
</div>
  