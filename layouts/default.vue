<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NuxtLoadingIndicator />
  <div class="h-full">
    <CoreNavbar />
    <slot />
  </div>
  
  <CoreFooter />
</template>
  