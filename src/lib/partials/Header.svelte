<script>
  import Logo from "$lib/images/logo.png";
  import { page } from '$app/stores';
  import { fade, slide } from 'svelte/transition'
  let showDropdown = false;
  let activeTextClass = 'text-fuchsia-700';
  let inactiveTextClass = 'hover:text-purple-500/80';
  let activeUndelineClass = 'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0';

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
</script>

<header
  class="pointer-events-none sticky top-0 z-50 flex flex-col">
  <div class="top-0 z-10 h-16 pt-6">
    <div
      class="sm:px-8 w-full"
    >
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative px-4 sm:px-8 lg:px-12">
          <div class="mx-auto max-w-2xl lg:max-w-5xl">
            <div class="relative flex gap-4 bg-white/25 rounded-full py-2">
              <div class="flex flex-1">
                <div
                  class="h-10 w-10 ml-2 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
                >
                  <a aria-label="Home" class="pointer-events-auto" href="/">
                    <img
                    alt=""
                    fetchpriority="high"
                    decoding="async"
                    data-nimg="1"
                    width="32"
                    height="32"
                    class="rounded-full bg-zinc-100 object-cover h-9 w-9"
                    sizes="2.25rem"
                    src="{Logo}"
                    style="color: transparent;"
                  />
                  </a>
                </div>
              </div>
              <div class="flex flex-1 justify-end md:justify-center">
                <div
                  class="pointer-events-auto md:hidden"
                  data-headlessui-state=""
                >
                  <button
                    on:click={toggleDropdown}
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
                  {#if showDropdown}
                  <div>
                    <div transition:fade on:click={() => showDropdown = false}
                      class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm opacity-100"
                      id="headlessui-popover-overlay-:r1g:"
                      aria-hidden="true"
                      data-headlessui-state="open"
                    />
                    <div transition:slide
                      class="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5  opacity-100 scale-100"
                      id="headlessui-popover-panel-:r1h:"
                      tabindex="-1"
                      data-headlessui-state="open"
                    >
                      <div
                        class="flex flex-row-reverse items-center justify-between"
                      >
                        <button
                          on:click={toggleDropdown}
                          aria-label="Close menu"
                          class="-m-1 p-1"
                          type="button"
                          data-headlessui-state="open"
                          tabindex="0"
                          ><svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            class="h-6 w-6 text-zinc-500 "
                            ><path
                              d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            /></svg
                          ></button
                        >
                        <h2
                          class="text-sm font-medium text-zinc-600 "
                        >
                          Menu
                        </h2>
                      </div>
                      <nav class="mt-6">
                        <ul
                          class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 "
                        >
                          <li>
                            <a 
                              class="block py-2"
                              data-headlessui-state="open"
                              on:click={() => showDropdown = false}
                              href="/">Home</a
                            >
                          </li>
                          <li>
                            <a
                              class="block py-2"
                              data-headlessui-state="open"
                              on:click={(event) => showDropdown = false}
                              href="/product">Product</a
                            >
                          </li>
                          <li>
                            <a
                              class="block py-2"
                              data-headlessui-state="open"
                              on:click={(event) => showDropdown = false}
                              href="/about">About</a
                            >
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/if}
                </div>
                <nav class="pointer-events-auto hidden md:block">
                  <ul
                    class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
                  >
                    <li>
                      <a
                        class="relative block px-3 py-2 transition {$page.url.pathname == '/' ? activeTextClass : inactiveTextClass}"
                        href="/"
                        >Home
                        <span class="{$page.url.pathname == '/' ? activeUndelineClass : ''}"/></a
                      >
                    </li>
                    <li>
                      <a
                        class="relative block px-3 py-2 transition {$page.url.pathname == '/product' ? activeTextClass : inactiveTextClass}"
                        href="/product">Product<span class="{$page.url.pathname == '/product' ? activeUndelineClass : ''}"/></a
                      >
                    </li>
                    <li>
                      <a
                        class="relative block px-3 py-2 transition {$page.url.pathname == '/about' ? activeTextClass : inactiveTextClass}"
                        href="/about">About<span class="{$page.url.pathname == '/about' ? activeUndelineClass : ''}"/></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="flex justify-end md:flex-1">
                <div class="pointer-events-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
