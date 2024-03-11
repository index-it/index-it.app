<template>
  <div class="flex flex-col items-center justify-center h-full">
    <!-- First section with title and download button -->
    <div class="flex h-full flex-col flex-grow flex-shrink flex-auto items-center justify-center">
      <div
        class="flex flex-grow"
      />

      <span class="text-[4.8rem] leading-none md:text-7xl mb-10 font-bold text-center">
        Note down what matters to you
      </span>
      <NuxtLink
        to="/playstore"
        role="button"
        class="mt-8 px-8 py-4 text-2xl font-semibold bg-green-200 rounded-lg"
      >
        Get Index
      </NuxtLink>

      <div class="flex flex-grow flex-col justify-end py-4">
        <span>Scroll to learn more</span>
      </div>
    </div>
  </div>
</template>
