<template>
  <div class="h-full flex flex-col items-center justify-center">
    <div
        :class="[alertText === null ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0', alertType === 1 ? 'bg-green-100 text-green-700' : (alertType === 2 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700')]"
        class="fixed z-10 bottom-4 md:bottom-[7%] rounded-lg py-5 px-6 m4-2 mx-4 text-base text-center transition-opacity transition-all ease-in-out duration-500"
        @click="alertText=null"
    >
      {{ alertText }}
    </div>

    <div class="text-[4.8rem] leading-none md:text-9xl mb-10 font-bold text-center">
      <span>It's coming.</span>
    </div>
    <div class="text-center">
      <span class="italic text-xl md:text-2xl">The essential app for any kind of list</span>
    </div>
    <form @submit.prevent class="w-10/12  md:w-auto text-white flex items-center content-center flex-col md:flex-row bg-stone-700 dark:bg-stone-800 dark:hover:bg-stone-800/70 hover:bg-stone-700/95 text-lg md:text-xl mt-20 rounded-md p-2 duration-300">
      <input v-model="email" class="outline-0 p-3 bg-transparent w-full md:w-auto" type="email" placeholder="> enter your email" required>
      <button type="submit" class="button w-full md:w-auto font-medium" @click="notifyEmail">Notify when ready!</button>
    </form>
  </div>
</template>

<script setup>
const email = ref(null)

let alertText = ref(null)
let alertType = ref(0)

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isEmailValid = (email) => {
  if (email === null || email === undefined || !emailRegex.test(email))
    return false
  else
    return true
}

const notifyEmail = async () => {
  if (isEmailValid(email.value)) {
    const emailEncoded = encodeURIComponent(email.value)
    $fetch(`/notify/${emailEncoded}`, {
      baseURL: useRuntimeConfig().public.apiBase,
    })
        .then(() => {
          alertText.value = "You will be notified when Index will be available :)"
          alertType.value = 1
          console.log('User will be notified')
        })
        .catch(() => {
          alertText.value = "An error occurred, please try again later :/"
          alertType.value = 2
          console.log('Error while registering user')
        })
  } else {
    alertText.value = "Please enter a valid email address ;)"
    alertType.value = 3
  }
}
</script>
