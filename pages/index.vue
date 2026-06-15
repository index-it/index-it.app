<script setup lang="ts">
</script>
<template>
  <div class="flex flex-col items-center justify-center h-full w-full">
<!--    <img-->
<!--      src="/logo.png"-->
<!--      alt="index beautiful cute logo"-->
<!--      class="aspect-square h-16 mb-4"-->
<!--    >-->
    <p class="text-xl text-center">
      Index - lists & tasks
    </p>

    <p class="text-center mt-2">
      built for simplicity and intentionality
    </p>

    <!--    <p>Index</p>-->

    <div class="flex flex-col items-start my-16">
      <p class="mb-4 font-bold">
        currently available on:
      </p>
      <p>
        iPhone: <nuxt-link
          to="appstore"
          target="_blank"
        >
          download
        </nuxt-link>
      </p>
      <!--      <a-->
      <!--        href="https://apps.apple.com/us/app/index-lists-tasks/id6743499824"-->
      <!--        target="_blank"-->
      <!--        class="no-hover"-->
      <!--      >-->
      <!--        <img-->
      <!--          src="~/assets/images/app-store-badge.png"-->
      <!--          alt="Download on the App Store"-->
      <!--          class="h-12 hover:opacity-80"-->
      <!--        >-->
      <!--      </a>-->

      <!--      <p class="opacity-40 text-sm">-->
      <!--        coming to more platform-->
      <!--      </p>-->
    </div>

    <div class="flex items-center justify-between md:justify-normal w-full md:w-auto md:space-x-32">
      <div class="flex flex-col">
        <nuxt-link to="contact">
          shoot me an email
        </nuxt-link>
        <nuxt-link
          to="discord"
          target="_blank"
        >
          msg on discord
        </nuxt-link>
        <nuxt-link
          to="github"
          target="_blank"
        >
          open source
        </nuxt-link>
      </div>
      <div class="flex flex-col text-end md:text-start">
        <nuxt-link to="/privacy">
          privacy policy
        </nuxt-link>
        <nuxt-link to="/terms">
          terms of service
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
