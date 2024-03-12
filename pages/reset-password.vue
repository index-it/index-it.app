<template>
  <div class="flex grow flex-col items-center justify-center text-center min-h-screen">
    <div
      :class="[alertText === null ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0', alertType === 1 ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700']"
      class="fixed z-10 bottom-4 md:bottom-[7%] rounded-lg py-5 px-6 m4-2 mx-4 text-base text-center transition-all ease-in-out duration-500"
      @click="alertText=null"
    >
      {{ alertText }}
    </div>
    <span class="text-3xl leading-none md:text-6xl font-bold mb-4">Reset your password</span>
    <div>
      <form
        class="text-white flex items-center flex-col text-lg md:text-xl mt-12 w-screen"
        @submit.prevent
      >
        <input
          v-model="password"
          class="outline-0 p-3 w-10/12 md:w-1/4 bg-stone-700 hover:bg-stone-700/95 rounded-t-md"
          type="password"
          placeholder="Enter your new password"
          required
        >
        <input
          v-model="passwordRepeat"
          class="outline-0 p-3 w-10/12 md:w-1/4 bg-stone-700 hover:bg-stone-700/95 rounded-b-md"
          type="password"
          placeholder="Repeat the password"
          required
        >
        <button
          type="submit"
          class="button w-10/12 md:w-1/4 font-medium mt-4"
          @click="sendPasswordReset"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Reset your password',
  meta: [
    { name: 'title', content: 'Reset your password' }
  ],
})

const alertText = ref(null)
const alertType = ref(0)

const route = useRoute()

const password = ref(null)
const passwordRepeat = ref(null)

const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/
const isPasswordValid = (password) => {
  if (password === null || password === undefined || !passwordRegex.test(password))
    return false
  else
    return true
}
const isPasswordRepeatValid = (password, passwordRepeat) => {
  return password == passwordRepeat
}
const isTokenValid = (token) => {
  return token !== null && token !== undefined && token !== ""
}

const sendPasswordReset = async () => {
  const token = route.query.token;

  if (!isPasswordValid(password.value)) {
    alertText.value = "Password must contain an uppercase letter, a lowercase one and a number"
    alertType.value = 2
    return
  }

  if (!isPasswordRepeatValid(password.value, passwordRepeat.value)) {
    alertText.value = "The two passwords do not match!"
    alertType.value = 2
    return
  }

  if (!isTokenValid(token)) {
    alertText.value = "Invalid state, please request a new password reset from the app!"
    alertType.value = 2
    return
  }

  $fetch(`/reset-password?token=${token}`, {
      baseURL: useRuntimeConfig().public.apiBase,
      method: 'POST',
      body: {
        password: password.value
      }
    })
        .then(() => {
          navigateTo('/password-reset-success')
        })
        .catch((e) => {
          alertText.value = "Password couldn't be reset, try requesting a new reset from the app"
          alertType.value = 1
          console.log(`Error while resetting password, ${e}`)
        })
}
</script>
