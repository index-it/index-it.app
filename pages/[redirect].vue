<template>
  <div class="h-full flex grow flex-col items-center justify-center text-center">
    <span class="text-3xl leading-none md:text-6xl font-bold animate-pulse">{{ pageContent }}</span>
  </div>
</template>

<script setup>
import { redirects } from "../assets/config/redirects";
import { nextTick } from "vue"

const route = useRoute()
const redirect = redirects.find(redirect => redirect.id === route.params.redirect.toLowerCase())
const pageContent = redirect ? `Redirecting to ${redirect.name}` : '404 - Not found'

useHead({
  title: pageContent,
  meta: [
    { name: 'title', content: pageContent }
  ],
})

onMounted(() => {
  console.log("hello")
  // Guarantees the DOM tree to be fully built
  nextTick(() => {
    console.log("hei")
    if (redirect) {
      setTimeout(() => {
        try {
          location.replace(redirect.url)
        } catch (error) {}
      }, 1000)
    }
  })
})
</script>
