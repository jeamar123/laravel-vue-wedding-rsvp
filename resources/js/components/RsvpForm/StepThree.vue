<template>
  <div class="relative p-10 mx-auto max-w-[768px]">
    <form novalidate @submit.prevent="submit">
      <h3 class="text-xl mb-5">
        <span class="font-semibold">Awesome!</span><br />
        That's good to hear.
      </h3>

      <h3 v-if="pending === 0" class="text-base pt-7 mb-12">Click continue to proceed.</h3>

      <div v-if="pending > 0">
        <h3 class="text-base mb-10">
          We saw that you have (
          <span class="font-semibold" v-text="userForm.number_of_companions" /> ) companion(s)
          indicated on your invitation and ( <span class="font-semibold" v-text="pending" /> ) of
          them didn't respond yet.<br /><br />
          You can RSVP for them if you want.
        </h3>
      </div>

      <div v-if="pending > 0" class="mb-10">
        <div class="flex items-center gap-5 text-xs italic pb-3 border-b border-[#ddd]">
          <div class="flex-1">Name</div>
          <div class="flex items-center gap-5">
            <div class="w-[70px] text-center" v-text="`Pending`" />
            <div class="w-[70px] text-center" v-text="`Attend`" />
            <div class="w-[90px] text-center" v-text="`Can't attend`" />
          </div>
        </div>
        <div
          v-for="(companion, index) in form.companions"
          :key="index"
          :class="['flex items-center gap-5 py-3 border-b border-[#ddd]']"
        >
          <p class="flex-1" v-text="companion.full_name" />
          <div class="flex items-center gap-5">
            <div class="w-[70px]">
              <div
                :class="[
                  'w-[20px] h-[20px] border border-[#222] relative rounded mx-auto cursor-pointer',
                  companion.response === 'pending' && 'bg-[#770C00]'
                ]"
              >
                <div
                  v-if="companion.response === 'pending'"
                  class="absolute top-[-1px] left-[6px] w-[7px] h-[16px] border-r-2 border-b-2 border-white transform rotate-[45deg] cursor-pointer"
                ></div>
                <input
                  type="radio"
                  class="w-full h-full opacity-0 absolute top-0 left-0"
                  value="pending"
                  v-model="companion.response"
                  :name="`${companion.first_name}-response`"
                  :checked="companion.response === 'pending'"
                />
              </div>
            </div>

            <div class="w-[70px]">
              <div
                :class="[
                  'w-[20px] h-[20px] border border-[#222] relative rounded mx-auto cursor-pointer',
                  companion.response === 'going' && 'bg-[#770C00]'
                ]"
              >
                <div
                  v-if="companion.response === 'going'"
                  class="absolute top-[-1px] left-[6px] w-[7px] h-[16px] border-r-2 border-b-2 border-white transform rotate-[45deg] cursor-pointer"
                ></div>
                <input
                  type="radio"
                  class="w-full h-full opacity-0 absolute top-0 left-0"
                  value="going"
                  v-model="companion.response"
                  :name="`${companion.first_name}-response`"
                  :checked="companion.response === 'going'"
                />
              </div>
            </div>

            <div class="w-[90px]">
              <div
                :class="[
                  'w-[20px] h-[20px] border border-[#222] relative rounded mx-auto cursor-pointer',
                  companion.response === 'not_going' && 'bg-[#770C00]'
                ]"
              >
                <div
                  v-if="companion.response === 'not_going'"
                  class="absolute top-[-1px] left-[6px] w-[7px] h-[16px] border-r-2 border-b-2 border-white transform rotate-[45deg] cursor-pointer"
                ></div>
                <input
                  type="radio"
                  class="w-full h-full opacity-0 absolute top-0 left-0"
                  value="not_going"
                  v-model="companion.response"
                  :name="`${companion.first_name}-response`"
                  :checked="companion.response === 'not_going'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="submit"
          class="bg-[#770C00] text-white h-[50px] w-[140px] flex items-center justify-center rounded-[8px] font-medium opacity-100 md:opacity-90 hover:opacity-100 transition-all duration-[0.7] ease-in-out"
        >
          Continue
        </button>
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
import { REQUEST_RESERVATION } from '@/store/modules/rsvp'
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['success', 'back'])
const store = useStore()
const dispatch = store.dispatch

const userForm = computed(() => store.state.rsvp.form)
const pending = computed(() => store.state.rsvp.form.user.companions.pending.length)

const form = ref({
  number_of_companions: userForm.value.number_of_companions,
  companions: userForm.value.user?.companions.pending || [],
  errors: {}
})

const submit = async () => {
  let params = {
    companions: form.value.companions,
    id: userForm.value.user.id,
    is_joining: true
  }

  const res = await dispatch(REQUEST_RESERVATION, params)
  if (res) {
    emit('success')
  }
}
</script>
