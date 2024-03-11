<template>
  <div
    class="w-full px-4 pb-4 pt-12"
  >
    <!-- footer links section -->
    <div class="flex justify-around md:justify-evenly">
      <div class="flex flex-col gap-y-3">
        <p class="text-lg">
          Product
        </p>
        <div class="flex flex-col gap-y-2">
          <NuxtLink to="/playstore">
            Download
          </NuxtLink>
          <NuxtLink to="/roadmap">
            Roadmap
          </NuxtLink>
          <NuxtLink to="/community">
            Community
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-y-3">
        <p class="text-lg">
          Company
        </p>
        <div class="flex flex-col gap-y-2">
          <NuxtLink to="/patreon">
            About
          </NuxtLink>
          <NuxtLink to="/terms">
            Terms of service
          </NuxtLink>
          <NuxtLink to="/privacy">
            Privacy policy
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-y-3">
        <p class="text-lg">
          Social
        </p>
        <div class="flex flex-col gap-y-2">
          <NuxtLink to="/youtube">
            YouTube
          </NuxtLink>
          <NuxtLink to="/twitter">
            Twitter
          </NuxtLink>
          <NuxtLink href="/instagram">
            Instagram
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
