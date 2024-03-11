<template>
  <div class="flex grow flex-col items-center justify-center text-center min-h-screen">
    <span class="text-3xl leading-none md:text-6xl font-bold animate-pulse mb-4">Invalid verification attempt</span>
    <span class="text-md leading-none md:text-xl font-bold animate-pulse">Something went wrong went sending the verification request</span>
  </div>
</template>

<script setup>
useHead({
  title: 'Invalid email verification attempt',
  meta: [
    { name: 'title', content: 'Invalid email verification attempt' }
  ],
})
</script>
