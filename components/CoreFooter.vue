<template>
  <div
    class="w-full mt-16 bg-zinc-900 text-white py-12 px-4 md:px-24"
  >
    <!-- footer links section -->
    <div class="flex justify-around md:justify-evenly">
      <div class="flex flex-col sm:flex-row items-center flex-wrap gap-x-24 w-full justify-center gap-y-4">
        <NuxtLink
          v-if="$router.currentRoute.value.path !== '/'"
          to="/"
          class="link"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="mailto:support@index-it.app"
          class="link"
        >
          Contact
        </NuxtLink>
        <NuxtLink
          to="/terms"
          class="link"
        >
          Terms of service
        </NuxtLink>
        <NuxtLink
          to="/privacy"
          class="link"
        >
          Privacy policy
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss" scoped>
.link {
  @apply hover:underline hover:opacity-80;
}
</style>
