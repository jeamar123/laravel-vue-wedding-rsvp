<template>
  <div class="relative p-10 mx-auto max-w-[768px]">
    <form v-if="isNotJoining === false" novalidate @submit.prevent="submit">
      <h3 class="text-lg md:text-xl mb-3">
        Hi, <span class="font-semibold text-[#9F5B4D] capitalize" v-text="userForm.name" />!<br />
        <span v-if="isPending">We would love it if you could join us!</span>
      </h3>

      <div v-if="isPending">
        <h3 class="text-lg md:text-xl mb-8">
          The celebration is on
          <span class="font-semibold" v-text="`28th of January 2023, Saturday at 1pm`" /><br />are
          you able to join?
        </h3>

        <div class="mb-14 flex flex-col gap-3">
          <button
            type="button"
            :class="[
              'border border-[#9F5B4D] py-3 px-3 w-full max-w-[300px] rounded text-left  transition-all duration-150 ease-in-out flex items-center justify-between',
              form.confirm === true
                ? 'bg-[#9F5B4D] text-white'
                : 'text-[#770C00] hover:bg-[#9F5B4D] hover:text-white'
            ]"
            @click="form.confirm = true"
          >
            <span v-text="`Yes`" />
            <CheckIcon
              v-if="form.confirm === true"
              class="w-5"
            />
          </button>

          <button
            type="button"
            :class="[
              'border border-[#9F5B4D] py-3 px-3 w-full max-w-[300px] rounded text-left  transition-all duration-150 ease-in-out flex items-center justify-between',
              form.confirm === false
                ? 'bg-[#9F5B4D] text-white'
                : 'text-[#770C00] hover:bg-[#9F5B4D] hover:text-white'
            ]"
            @click="form.confirm = false"
          >
            <span v-text="`Sorry, I won't be able to make it`" />
            <CheckIcon
              v-if="form.confirm === false"
              class="w-5"
            />
          </button>
        </div>

        <div v-if="form.confirm !== null" class="flex items-center gap-2">
          <button
            type="submit"
            class="bg-[#770C00] text-white h-[50px] w-[140px] flex items-center justify-center rounded-[8px] font-medium opacity-100 md:opacity-90 hover:opacity-100 transition-all duration-[0.7] ease-in-out"
          >
            Continue
          </button>
        </div>
      </div>

      <div v-else>
        <h3 class="text-lg mb-10">
          We already got your RSVP before.<br />
          Did you change your mind and want to update your response?
        </h3>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="border border-[#770C00] text-[#770C00] h-[50px] w-[140px] flex items-center justify-center rounded-[8px] font-medium opacity-100 md:opacity-90 hover:opacity-100 transition-all duration-[0.7] ease-in-out"
            @click="emit('finish')"
          >
            No
          </button>

          <button
            type="button"
            class="bg-[#770C00] text-white h-[50px] w-[140px] flex items-center justify-center rounded-[8px] font-medium opacity-100 md:opacity-90 hover:opacity-100 transition-all duration-[0.7] ease-in-out"
            @click="isPending = true"
          >
            Yes
          </button>
        </div>
      </div>
    </form>

    <button
      v-if="isNotJoining === false"
      @click="emit('back')"
      class="text-xs text-[#770C00] flex items-center gap-2 mt-10"
    >
      <div class="rounded-full border border-[#770C00] w-5 h-5 flex items-center justify-center">
        <ArrowLeftIcon class="w-3 fill-[#770C00]" />
      </div>
      <span v-text="`Back`" />
    </button>

    <div v-if="isNotJoining" class="flex flex-col justify-center">
      <p class="text-lg md:text-xl mb-5">
        Hmm.. That's too bad. Thanks for letting us know!<br />If you changed your mind, feel free
        to reach out to the couple.
      </p>
      <p class="text-lg md:text-xl mb-5">All done. Thanks for your time.</p>

      <div class="mb-5 pt-10">
        <button
          class="bg-[#770C00] text-white h-[50px] w-[140px] flex items-center justify-center rounded-[8px] font-medium opacity-100 md:opacity-90 hover:opacity-100 transition-all duration-[0.7] ease-in-out"
          @click="emit('reset')"
        >
          RSVP again
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { REQUEST_RESERVATION } from '@/store/modules/rsvp'
import { ArrowLeftIcon, CheckIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['success', 'back', 'finish', 'reset'])
const store = useStore()
const dispatch = store.dispatch

const userForm = computed(() => store.state.rsvp.form)
const user = computed(() => store.state.rsvp.form?.user)

const isPending = ref(user.value.pending)
const form = ref({
  confirm: userForm.value.confirm || null
})
const isNotJoining = ref(false)

const submit = async () => {
  if (form.value.confirm === true) {
    emit('success')
  } else {
    let params = {
      id: userForm.value.user.id,
      is_joining: false
    }
    const res = await dispatch(REQUEST_RESERVATION, params)
    if (res.status === 201 || res.status === 200) {
      isNotJoining.value = true
    }
  }
}
</script>
