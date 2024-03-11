<template>
  <div
    class="w-full mt-16 bg-[#27282c] text-white py-12 px-4 md:px-24"
  >
    <!-- footer links section -->
    <div class="flex justify-around md:justify-evenly">
      <div class="flex flex-col gap-y-3">
        <p class="text-xl font-semibold">
          Product
        </p>
        <div class="flex flex-col gap-y-2">
          <NuxtLink
            to="/playstore"
            class="link"
          >
            Download
          </NuxtLink>
          <NuxtLink
            to="/roadmap"
            class="link"
          >
            Roadmap
          </NuxtLink>
          <NuxtLink
            to="/community"
            class="link"
          >
            Community
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-y-3">
        <p class="text-xl font-semibold">
          Company
        </p>
        <div class="flex flex-col gap-y-2">
          <NuxtLink
            to="/donate"
            class="link"
          >
            Donate
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
      <div class="flex flex-col gap-y-3">
        <p class="text-xl font-semibold">
          Social
        </p>
        <div class="flex flex-col gap-y-2">
          <NuxtLink
            to="/youtube"
            class="link"
          >
            YouTube
          </NuxtLink>
          <NuxtLink
            to="/twitter"
            class="link"
          >
            Twitter
          </NuxtLink>
          <NuxtLink
            href="/instagram"
            class="link"
          >
            Instagram
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss" scoped>
.link {
  @apply hover:underline hover:opacity-80;
}
</style>
