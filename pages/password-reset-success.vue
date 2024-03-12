<template>
  <div class="flex grow flex-col items-center justify-center text-center min-h-screen">
    <span class="text-3xl leading-none md:text-6xl font-bold animate-pulse mb-4">Password reset!</span>
    <span class="text-md leading-none md:text-xl font-bold animate-pulse">Your password has been successfully reset</span>
  </div>
</template>

<script setup>
useHead({
  title: 'Password reset successful',
  meta: [
    { name: 'title', content: 'Password reset successful' }
  ],
})
</script>
