<template>
  <div class="relative p-10 mx-auto max-w-[768px]">
    <h3 class="text-lg md:text-xl mb-16">
      <span class="font-semibold" v-text="`Cool!`"/> Thanks for your time<br>
      <span class="font-semibold" v-text="`We'll see you there.`"/>
    </h3>

    <h3 class="text-lg md:text-xl mb-5">Also, here are some notes and FAQs for the event.</h3>

    <FAQs />

    <div class="mb-5 pt-10">
      <button 
        class="bg-[#770C00] text-white h-[50px] w-[140px] flex items-center justify-center rounded-[8px] font-medium opacity-100 md:opacity-90 hover:opacity-100 transition-all duration-[0.7] ease-in-out"
        @click="emit('reset')"
      >RSVP again</button>
    </div>
  </div>
</template>

<script setup>
import FAQs from '@/components/FAQs.vue'
const emit = defineEmits(['reset'])
</script>
