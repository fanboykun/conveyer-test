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
<div class="sm:px-8 mt-16 sm:mt-32 pb-32">
  <div class="mx-auto max-w-7xl lg:px-8">
    <div class="relative px-4 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-2xl lg:max-w-5xl">
        <header class="max-w-2xl">
          <h1
            class="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800"
          >
            Our Commitment
          </h1>
          <p class="mt-6 text-base text-zinc-600 ">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </header>
        <div class="mt-16 sm:mt-20">
          <ul
            role="list"
            class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
          {#each features as feature}  
          <li class="group relative flex flex-col items-start">
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
                class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-white/25 transition group-hover:scale-100 group-hover:bg-white/50  sm:-inset-x-6 sm:rounded-2xl"
              />
              <p
                ><span
                  class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
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
