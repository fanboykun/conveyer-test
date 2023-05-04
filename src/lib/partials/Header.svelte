<script>
    import Logo from '$lib/images/logo.png'
</script>

<header
class="pointer-events-none sticky top-0 z-50 flex flex-col"
style="height:var(--header-height);margin-bottom:var(--header-mb)">
<div class="top-0 z-10 h-16 pt-6" style="position:var(--header-position)">
  <div
    class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
    style="position:var(--header-inner-position)"
  >
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="relative flex gap-4">
            <div class="flex flex-1">
              <div
                class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
              >
                <a aria-label="Home" class="pointer-events-auto" href="/"
                  >
                  <!-- <img
                    alt=""
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="1"
                    class="rounded-full bg-zinc-100 object-cover  h-9 w-9"
                    sizes="2.25rem"
                    src="{Logo}"
                    style="color: transparent;"
                  /> -->
                  </a
                >
              </div>
            </div>
            <div class="flex flex-1 justify-end md:justify-center">
              <div
                class="pointer-events-auto md:hidden"
                data-headlessui-state=""
              >
                <button
                  class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:R2qb6:"
                  >Menu<svg
                    viewBox="0 0 8 6"
                    aria-hidden="true"
                    class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700"
                    ><path
                      d="M1.75 1.75 4 4.25l2.25-2.5"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                  ></button
                >
              </div>
              <nav class="pointer-events-auto hidden md:block">
                <ul
                  class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur "
                >
                  <li>
                    <a
                      class="relative block px-3 py-2 transition text-pink-500 "
                      href="/"
                      >Home<span
                        class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 "
                      /></a
                    >
                  </li>
                  <li>
                    <a
                      class="relative block px-3 py-2 transition hover:text-teal-500 "
                      href="/about">About</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
            <div class="flex justify-end md:flex-1">
              <div class="pointer-events-auto">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</header>