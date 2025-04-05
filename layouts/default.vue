<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <canvas
    id="gradient-canvas"
    data-transition-in
  />
  
  <NuxtLoadingIndicator />
<!--  <CoreNavbar />-->
  <div class="absolute h-full w-full -z-20" />

  <div class="overflow-y-auto">
    <slot />
    <CoreFooter />
  </div>
</template>

<script setup>
import { Gradient } from '~/assets/script/MeshGradient'

onMounted(() => {
  const gradient = new Gradient()
  gradient.initGradient('#gradient-canvas')
})
</script>
  