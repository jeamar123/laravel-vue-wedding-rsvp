<template>
  <div id="schedule" class="relative bg-[#FFFDF6] border-b border-[#E1D5B3] pt-[80px] md:pt-[150px] pb-[50px] px-10 md:px-[100px] z-10 border-b border-[#E1D5B3]">
    <div class="text-center">
      <h3 class="text-[#9F5B4D] ff-adelio-darmanto tracking-[5px] sm:tracking-[8px] text-[72px] md:text-[84px] font-bold mb-[20px] wow fadeInUp">January 28th, 2023</h3>
      <p class="text-[#9F5B4D] ff-adelio-darmanto tracking-[8px] text-[52px] md:text-[44px] mb-[40px] wow fadeInUp" data-wow-delay="0.5s">Saturday 1:00pm</p>

      <p class="md:font-medium text-[20px] text-[#555] mb-12 sm:mb-[30px] leading-[26px] wow fadeInUp" data-wow-delay="1s">Requesting the honor of your presence on our wedding day</p>
      
      <h3 class="text-[#222] text-[28px] font-medium md:font-semibold mb-[10px] leading-[36px] wow fadeInUp" data-wow-delay="1.5s">IFI Cathedral of Jesus the Nazarene</h3>
      <p class="text-[#555] text-[20px] font-normal leading-[26px] wow fadeInUp mb-6" data-wow-delay="2s">Pabayo, Pacana Sts., Cagayan de Oro City</p>

      <a 
        class="block mb-6 mx-auto underline text-[#770C00] text-base italic leading-[26px] cursor-pointer font-bold"   
        @click="showMap = !showMap"
        v-text="showMap ? `Click to hide map` : `Click to see directions`"
      />
      <div v-if="showMap" class="border border-gray-500 max-w-max mx-auto overflow-hidden">
        <img src="/images/church-map.png" alt="" class="scale-[1.5] md:scale-100">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WOW from 'wow.js'

new WOW().init()

const showMap = ref(false)
</script>
