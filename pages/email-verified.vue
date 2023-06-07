<template>
  <div class="h-full flex grow flex-col items-center justify-center text-center">
    <span class="text-3xl leading-none md:text-6xl font-bold animate-pulse mb-4">Email verified!</span>
    <span class="text-md leading-none md:text-xl font-bold animate-pulse">You can now go back to the app</span>
  </div>
</template>

<script setup>
useHead({
  title: 'Email successful verification page',
  meta: [
    { name: 'title', content: 'Email successful verification page' }
  ],
})
</script>
