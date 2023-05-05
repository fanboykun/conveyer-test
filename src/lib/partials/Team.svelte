<script>
  import People from '$lib/images/people.jpg'
  let persons = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      image: People
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      image: People
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      image: People
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      image: People
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      image: People
    },
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      image: People
    },
  ]
</script>
<div class="bg-white/10 py-16 sm:py-16 drop-shadow-sm" id="us">
  <div class="mx-auto grid max-w-7xl gap-y-8 gap-x-8 px-6 lg:px-8 xl:grid-cols-6">
      <div class="mx-auto lg:col-span-2 pb-4">
        <header class="max-w-auto">
          <h1
            class="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800"
          >
            Behind Our Great Work, There Are <span> Great People </span>
          </h1>
        </header>
      </div>
      <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 sm:gap-y-16 xl:col-span-6">
        {#each persons as person}
        <li>
          <div class="flex justify-center bg-white/25 rounded-2xl py-4">
            <div class="block items-center gap-x-6">
              <div class="flex items-end px-10">
                <img class="flex h-16 w-16 justify-self-center rounded-full" src="{person.image}" alt="">
              </div>
              <div class="block w-fit px-4 justify-self-center -top-1 bg-white/50 rounded-xl">
                <h3 class="flex text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p class="flex text-sm font-semibold leading-6 text-fuchsia-600/80">{person.role}</p>
              </div>
            </div>
          </div>
        </li>
        {/each}
      </ul>
    </div>
</div>