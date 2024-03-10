<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NuxtLoadingIndicator />
  <div class="min-h-screen">
    <CoreNavbar />
    <slot />
  </div>
  
  <CoreFooter />
</template>
  