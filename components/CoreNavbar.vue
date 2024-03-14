<template>
  <!-- full navbar container -->
  <div
    ref="navbarContainer"
    class="transition-[background box-shadow] top-0 z-50 min-w-full duration-100 fixed"
  >
    <!-- navbar content container -->
    <header class="container mx-auto flex h-16 gap-12 px-4">
      <!-- astro logo -->
      <div class="flex items-center">
        <NuxtLink
          to="/"
          aria-label="home"
          class="flex items-center"
        >
          <NuxtImg
            src="/logo-full-no-bg.png"
            class="h-6 w-auto select-none"
            alt="Index logo"
            draggable="false"
          />
        </NuxtLink>
      </div>

      <!-- desktop: navbar items -->
      <div class="hidden items-center gap-12 whitespace-nowrap lg:flex text-xl">
        <NuxtLink
          to="/playstore"
          class="hover:underline hover:opacity-80"
        >
          Download
        </NuxtLink>
        <NuxtLink
          to="/community"
          class="hover:underline hover:opacity-80"
        >
          Community
        </NuxtLink>
        <NuxtLink
          to="/roadmap"
          class="hover:underline hover:opacity-80"
        >
          Roadmap
        </NuxtLink>
        <NuxtLink
          to="/donate"
          class="hover:underline hover:opacity-80"
        >
          Donate
        </NuxtLink>
      </div>

      <!-- spacer -->
      <div
        class="flex flex-grow"
      />

      <!-- mobile -->
      <div class="flex items-center">
        <div class="flex items-center lg:hidden">
          <!-- background shadow -->
          <div
            v-if="navbarOpened"
            class="fixed left-0 top-0 h-screen w-screen opacity-50"
          />
          <Icon
            :name="
              navbarOpened
                ? 'fluent:dismiss-20-filled'
                : 'fluent:line-horizontal-3-20-filled'
            "
            class="z-10 cursor-pointer size-6 select-none"
            @click="toggleMobileNavbarOpenState"
          />

          <!-- mobile navbar drawer -->
          <div
            v-if="navbarOpened"
            class="fixed left-0 top-0 flex h-screen w-full flex-col justify-center items-center backdrop-blur-2xl bg-opacity-45"
          >
            <div class="flex flex-col px-4 gap-8 text-center text-xl font-semibold">
              <NuxtLink to="/download">
                Download
              </NuxtLink>
              <NuxtLink to="/community">
                Community
              </NuxtLink>
              <NuxtLink to="/roadmap">
                Roadmap
              </NuxtLink>
              <NuxtLink to="/donate">
                Donate
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core";

const route = useRoute();

// Navbar border toggling
const navbarContainer = ref<HTMLElement | null>(null);
const { y } = useWindowScroll();
const scrolledClasses = [
    "bg-white",
    "md:bg-opacity-75",
    "md:backdrop-saturate-150",
    "shadow-[inset_0_-1px_0_0_hsla(0,0%,100%,0.1)]",
    "md:backdrop-blur-sm",
    "border-b-[1px]",
    "border-neutral-300"
];

watch(y, () => {
    if (y.value > 0) {
        navbarContainer.value?.classList.add(...scrolledClasses);
    } else {
        navbarContainer.value?.classList.remove(...scrolledClasses);
    }
});

// mobile: navbar open state
const navbarOpened = ref(false);

function toggleMobileNavbarOpenState() {
    navbarOpened.value = !navbarOpened.value;
}

watch(() => route.fullPath, () => {
  navbarOpened.value = false;
});
</script>