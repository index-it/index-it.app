<template>
  <!-- full navbar container -->
  <div
    ref="navbarContainer"
    class="transition-[background box-shadow] top-0 z-50 min-w-full duration-100 absolute"
  >
    <!-- navbar content container -->
    <header class="container mx-auto flex h-16 gap-4 px-4">
      <!-- astro logo -->
      <div class="flex items-center">
        <NuxtLink
          to="/"
          aria-label="home"
          class="flex items-center"
        >
          <NuxtImg
            src="/logo.png"
            class="mr-4 h-10 w-10 select-none"
            alt="Index logo"
            draggable="false"
          />
        </NuxtLink>
      </div>

      <!-- desktop: navbar items -->
      <div class="hidden items-center gap-8 whitespace-nowrap lg:flex text-lg">
        <NuxtLink to="/playstore">
          Download
        </NuxtLink>
        <NuxtLink to="/community">
          Community
        </NuxtLink>
        <NuxtLink to="/roadmap">
          Roadmap
        </NuxtLink>
        <NuxtLink to="/patreon">
          About
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
            class="z-10 cursor-pointer"
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
              <NuxtLink to="/patreon">
                About
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

// Navbar border toggling
const navbarContainer = ref<HTMLElement | null>(null);
const { y } = useWindowScroll();
const scrolledClasses = [
    "bg-slate-100",
    "md:bg-opacity-50",
    "md:backdrop-saturate-150",
    "shadow-[inset_0_-1px_0_0_hsla(0,0%,100%,0.1)]",
    "md:backdrop-blur-sm",
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
</script>
