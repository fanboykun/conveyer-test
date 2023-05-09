<script>
   let features = [
    {
      title: 'Feature',
      description: 'Irure eiusmod cupidatat incididunt in. Commodo pariatur elit cupidatat voluptate incididunt veniam enim nulla voluptate.'
    },
    {
      title: 'Feature',
      description: 'Irure eiusmod cupidatat incididunt in. Commodo pariatur elit cupidatat voluptate incididunt veniam enim nulla voluptate.'
    },
    {
      title: 'Feature',
      description: 'Irure eiusmod cupidatat incididunt in. Commodo pariatur elit cupidatat voluptate incididunt veniam enim nulla voluptate.'
    },
    {
      title: 'Feature',
      description: 'Irure eiusmod cupidatat incididunt in. Commodo pariatur elit cupidatat voluptate incididunt veniam enim nulla voluptate.'
    },
    {
      title: 'Feature',
      description: 'Irure eiusmod cupidatat incididunt in. Commodo pariatur elit cupidatat voluptate incididunt veniam enim nulla voluptate.'
    },
    {
      title: 'Feature',
      description: 'Irure eiusmod cupidatat incididunt in. Commodo pariatur elit cupidatat voluptate incididunt veniam enim nulla voluptate.'
    }
  ]
</script>
<div class="py-10 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 max-w-screen mt-8">
  <div class="mx-auto">
    <div class="relative">
      <div class="mx-auto max-w-auto">
        <header class="mx-auto">
          <h1
            class="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800"
          >
            Our Commitment
          </h1>
          <p class="mt-6 text-base text-zinc-600 ">
            Laboris magna ea duis Lorem. Deserunt aliqua pariatur est cupidatat et magna. Adipisicing sunt amet ut nisi minim est velit cillum aliqua.
            Nisi eiusmod ipsum fugiat excepteur dolor dolore est. Nulla incididunt fugiat sit aute aliqua nisi eu ad veniam. Proident Lorem aliqua ad laborum. Proident ut et cupidatat esse et excepteur. Officia laboris nulla non officia pariatur sit ad anim eu exercitation Lorem qui ad.
          </p>
        </header>
        <div class="mt-16 sm:mt-20">
          <ul
            role="list"
            class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
          {#each features as feature}  
          <li class="group relative flex flex-col items-start px-2">
            <div
              class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5"
            >
              <!-- <img
                alt=""
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                data-nimg="1"
                class="h-8 w-8"
                src=""
                style="color: transparent;"
              /> -->
            </div>
            <h2
              class="mt-6 text-base font-semibold text-zinc-800"
            >
              <div
                class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-white/25 transition group-hover:scale-100 group-hover:bg-white/50  sm:-inset-x-6 sm:rounded-2xl lg:rounded-2xl px-2"
              />
              <p
                ><span
                  class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl lg:rounded-2xl lg:px-4"
                /><span class="relative z-10">{feature.title}</span></p
              >
            </h2>
            <p
              class="relative z-10 mt-2 text-base text-zinc-600 "
            >
            {feature.description}
            </p>
            <p
              class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 "
            >
            </p>
          </li>
          {/each}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
