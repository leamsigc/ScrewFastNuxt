<script lang="ts" setup>
/**
 *
 * Navigation bar
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

const navigation = await queryContent()
  .where({ navigation: true })
  .only(["_path", "navLabel", "title"])
  .find();
</script>

<template>
  <!-- Main header component -->
  <header
    class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start"
  >
    <!-- Navigation container -->
    <nav
      class="relative mx-2 w-full rounded-[36px] border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-neutral-800/80 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:mx-auto"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <!-- Brand logo -->
        <NuxtLink
          class="flex-none rounded-lg text-xl font-bold outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none"
          to="/"
          aria-label="Brand"
        >
          LOGO
        </NuxtLink>
        <!-- Collapse toggle for smaller screens -->
        <div class="ml-auto mr-5 md:hidden">
          <button
            type="button"
            class="hs-collapse-toggle flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-neutral-600 transition duration-300 hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:outline-none"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <svg
              class="h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:hidden"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6"></line>
              <line x1="3" x2="21" y1="12" y2="12"></line>
              <line x1="3" x2="21" y1="18" y2="18"></line>
            </svg>
            <svg
              class="hidden h-[1.25rem] w-[1.25rem] flex-shrink-0 hs-collapse-open:block"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <!-- ThemeIcon component specifically for smaller screens -->
        <span class="inline-block md:hidden"> ThemeIcon </span>
      </div>
      <!-- Contains navigation links -->
      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
      >
        <!-- Navigation links container -->
        <div
          class="mt-5 flex flex-col gap-x-0 gap-y-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-4 lg:gap-x-7 md:gap-y-0 md:ps-7"
        >
          <!-- Navigation links and Authentication component -->

          <template v-for="link of navigation" :key="link._path">
            <NuxtLink
              :to="link._path"
              :arial-label="link.title"
              class="rounded-lg text-base font-medium text-neutral-600 outline-none ring-zinc-500 hover:text-neutral-500 focus-visible:ring dark:text-neutral-400 dark:ring-zinc-200 dark:hover:text-neutral-500 dark:focus:outline-none md:py-3 md:text-sm 2xl:text-base"
            >
              {{ link.navLabel }}
            </NuxtLink>
          </template>

          <!-- ThemeIcon component specifically for larger screens -->
          <span class="hidden md:inline-block"> ThemeIcon </span>
        </div>
      </div>
    </nav>
  </header>
</template>
<style scoped></style>
