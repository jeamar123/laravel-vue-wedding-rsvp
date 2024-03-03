<template>
  <footer 
    class="w-full relative z-20 bg-[#F6F2E7] md:h-[80px] flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.35)] px-5 py-5 md:py-8 relative text-xs md:text-sm"
  >
    <div class="mx-auto max-w-[1280px] w-full flex flex-col md:flex-row items-center justify-between gap-2 md:gap-5">
      <p class="text-[#555] font-normal">© 2022 #ShielyGotTheJem . All Rights Reserved</p>
      <p class="text-[#555] font-normal">Made with Love By <router-link :to="{ name: 'Admin' }" class="text-[#9F5B4D] font-bold">Jeamar and Shiela</router-link></p>
    </div>

    <button 
      v-if="!['Rsvp', 'Faqs'].includes($route.name)"
      :class="[
        'absolute top-[-90px] md:top-[-70px] md:right-[20px] border w-16 h-16 md:w-12 md:h-12 flex flex-col items-center justify-center rounded text-white border-[#9f5b4e] bg-[#9f5b4e] hover:opacity-80 c-transition',
      ]"
      @click="scrollToTop"
    >
      <ArrowUpIcon
        class="w-7"
      />
    </button>
  </footer>
</template>

<script setup>
import { ArrowUpIcon } from '@heroicons/vue/24/outline'

const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
</script>
