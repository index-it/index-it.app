<template>
  <div class="flex flex-col items-center">
    <!-- First section with title and download button -->
    <div class="flex min-h-screen flex-col items-center justify-center">
      <div
        class="flex flex-grow"
      />

      <span class="text-[4.8rem] leading-none md:text-8xl mb-10 font-bold text-center px-8 md:px-16">
        Note down what matters to you.
      </span>
      <span class="italic text-xl md:text-2xl">Get Index, the app for any kind of list.</span>
      <NuxtLink
        to="/playstore"
        role="button"
        class="select-none mt-8 px-8 py-4 text-2xl font-semibold bg-neutral-800 hover:bg-black text-white rounded-lg"
      >
        Download
      </NuxtLink>

      <div class="flex flex-grow flex-col justify-end py-4">
        <span
          ref="scrollIndicator"
          class="transition-all italic text-lg tracking-wide select-none"
        >Scroll to discover</span>
      </div>
    </div>

    <!-- Showcase main features section -->
    <div class="flex flex-col lg:flex-row items-center justify-center px-8 lg:px-32 mt-16 gap-8 lg:gap-16">
      <div class="flex flex-col text-center lg:text-start gap-4">
        <span class="font-bold text-5xl">Lists</span>

        <span class="max-w-prose text-xl">
          Create all the lists you need to not forget about the stuff that matters to you!
          <br>
          Lists provide the hierarchy you need by having categories inside them.
          <br>
          Each category then has items inside it and each item can contain your meaningful notes, with markdown support!
        </span>
      </div>

      <NuxtImg
        src="/illustrations/lists-illustration.png"
        class="w-fit select-none"
        draggable="false"
      />
    </div>

    <div class="flex flex-col lg:flex-row-reverse items-center justify-center px-8 lg:px-32 mt-32 gap-8 lg:gap-16">
      <div class="flex flex-col text-center lg:text-start gap-4">
        <span class="font-bold text-5xl">Tasks</span>

        <span class="max-w-prose text-xl">
          Never forget about the stuff you need to do! Create tasks to organize your day.
          <br>
          Each task can have a priority, a due date, reminders, subtasks, a description and can be connected to items from your lists!
        </span>
      </div>

      <NuxtImg
        src="/illustrations/tasks-illustration.png"
        class="w-fit select-none"
        draggable="false"
      />
    </div>

    <div
      id="donate-box"
      class="flex flex-col bg-neutral-50 border-neutral-950 border-[1px] gap-6 rounded-2xl mx-8 mt-32 py-8 px-8 md:px-16 items-center"
      @mousemove="onMouseMove"
    >
      <span class="text-center font-bold text-3xl z-30">Support the development</span>
      <span class="text-center max-w-screen-lg text-lg z-30">
        My goal is to build a first class app for noting down things that matter to people.
        <br>
        I'm building native apps for all platforms to provide users with the experience that
        they deserve with their devices. Making native apps instead of using cross-platform solutions
        does of course make the process longer but I think it's for the good.
        <br>
        If you like the idea of the app and believe in the roadmap,
        you can support the development by donating!
      </span>
      <NuxtLink
        to="/patreon"
        role="button"
        class="button w-fit text-xl z-30"
      >
        Donate
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useWindowScroll } from "@vueuse/core";

// Navbar border toggling
const scrollIndicator = ref<HTMLElement | null>(null);
const { y } = useWindowScroll();
const scrolledClasses = [
    "text-transparent"
];

watch(y, () => {
    if (y.value > 0) {
      scrollIndicator.value?.classList.add(...scrolledClasses);
    } else {
      scrollIndicator.value?.classList.remove(...scrolledClasses);
    }
});

function onMouseMove(payload: MouseEvent) {
  const target = payload.currentTarget as HTMLElement;

  if (target !== null) {
    const rect = target.getBoundingClientRect(),
        x = payload.clientX - rect.left,
        y = payload.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
}
</script>

<style>
    #donate-box {
        position: relative;
    }

    #donate-box::before {
        background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y),
            #f9685499,
            transparent 30%
        );
        border-radius: inherit;
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        opacity: 0;
        transition: opacity 500ms;
    }

    #donate-box:hover::before {
        opacity: 1;
    }
</style>