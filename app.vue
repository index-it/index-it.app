<template>
  <div class="h-full flex flex-col">
    <Navbar class="grow-0" />
    <div class="flex grow flex-col items-center justify-center">
      <div class="text-[4.8rem] leading-none md:text-9xl mb-10 font-bold text-center">
        <span>It's coming.</span>
      </div>
      <div class="text-center">
        <span class="italic text-xl md:text-2xl">The essential app for any kind of list</span>
      </div>
      <form class="w-10/12  md:w-auto text-white flex items-center content-center flex-col md:flex-row bg-stone-700 hover:bg-stone-700/95 text-lg md:text-xl mt-20 rounded-md p-2">
        <input class="outline-0 p-3 bg-transparent w-full md:w-auto" type="email" placeholder="> enter your email" required>
        <button type="submit" class="button w-full md:w-auto font-medium">Notify when ready!</button>
      </form>
    </div>
    <Footer class="mt-auto grow-0"/>
  </div>
</template>