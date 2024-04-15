<script lang="ts" setup>
/**
 *
 * Default layout
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import Lenis from "@studio-freight/lenis";
import { onMounted } from "vue";
onMounted(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});

useHead({
  bodyAttrs: {
    class:
      "bg-neutral-200 selection:bg-yellow-400 selection:text-neutral-700 dark:bg-neutral-800",
  },
  htmlAttrs: {
    class: "scrollbar-hide lenis lenis-smooth scroll-pt-16",
  },
});
</script>
<template>
  <!--
    Setting up the main structure of the page.
    The Navbar is placed at the top, with a slot for the main content and FooterSection at the bottom.
    -->
  <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
    <!-- Navbar component -->
    <SectionsNavBar />
    <!-- Main content -->
    <main>
      <slot />
    </main>
  </div>
</template>
<style scoped>
/* CSS rules for the page scrollbar and scrolling experience with lenis library */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
</style>
