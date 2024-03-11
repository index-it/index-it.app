<!-- eslint-disable vue/no-multiple-template-root -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <NuxtLoadingIndicator />
  <CoreNavbar />
  <div class="absolute h-full w-full bg -z-20" />

  <div>
    <slot />
    <CoreFooter />
  </div>
</template>
  