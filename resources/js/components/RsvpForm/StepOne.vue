<template>
  <div class="relative p-10 mx-auto max-w-[768px]">
    <form novalidate @submit.prevent="submit">
      <h3 class="text-xl mb-5">What's your first and last name?</h3>

      <input
        type="text"
        :class="[
          'border-b border-black bg-transparent text-base py-2 px-1 w-full mb-2 text-[#9F5B4D] rounded-none outline-none'
        ]"
        placeholder="eg. Jeamar Libres"
        v-model="form.name"
        autofocus
      />

      <small
        v-if="form.errors.name"
        class="text-[11px] text-red-600 mb-3 block"
        v-html="form.errors.name"
      />

      <p class="italic text-[13px] mb-14 text-[#6F6B6B] leading-[18px] pt-3">
        <b>*Note:</b> Please enter the first and last name of one member of your party above. If
        you're responding for you and a guest (or your family), you'll be able to RSVP for your
        entire group on the next pages
      </p>

      <div class="flex items-center gap-2">
        <button
          type="submit"
          class="bg-[#770C00] text-white h-[50px] w-[140px] flex items-center justify-center rounded-[8px] font-medium opacity-100 md:opacity-90 hover:opacity-100 transition-all duration-[0.7] ease-in-out"
        >
          Continue
        </button>
        <span class="hidden md:block text-sm text-[#770C00]">or press ENTER</span>
      </div>
    </form>

    <button @click="emit('back')" class="text-xs text-[#770C00] flex items-center gap-2 mt-10">
      <div class="rounded-full border border-[#770C00] w-5 h-5 flex items-center justify-center">
        <ArrowLeftIcon class="w-3 fill-[#770C00]" />
      </div>
      <span v-text="`Back`" />
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { REQUEST_CHECK_NAME } from '@/store/modules/rsvp'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['success', 'back'])
const store = useStore()
const dispatch = store.dispatch

const userForm = computed(() => store.state.rsvp.form)

const form = ref({
  name: userForm.value.name || 'Jeamar Libres',
  errors: {}
})

const submit = async () => {
  if (!form.value.name) {
    form.value.errors.name = 'Please input your Fullname.'
    return false
  }

  let params = {
    name: form.value.name
  }

  const res = await dispatch(REQUEST_CHECK_NAME, params)
  if (res.status === 200) {
    emit('success')
  } else {
    form.value.errors.name = `Uh ooh, we can't find your name. Make sure you enter your name exactly as it appears on your invitation.<br>Still having trouble? Reach out to the couple and request access.`
  }
}
</script>
