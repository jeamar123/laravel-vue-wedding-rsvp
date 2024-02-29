<template>
  <div class="relative bg-[#FFFDF6] border-b border-[#E1D5B3] pt-[80px] pb-[120px] md:py-[100px] z-10 border-b border-[#E1D5B3]">
    <div class="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start gap-10 px-7 md:px-[100px]">
      <div class="w-full md:w-[350px] wow fadeInUp">
        <img src="images/3.jpg" alt="" class="w-full rounded-[20px]">
      </div>
      <div class="flex-1 text-center mx-auto">
        <h1 class="ff-adelio-darmanto tracking-[5px] text-center mx-auto max-w-[700px] mb-[34px] text-[#9F5B4D] text-[44px] md:text-[64px] font-bold md:leading-[70px] wow fadeInUp">Let us know if you can make it!</h1>

        <router-link 
          class="mx-auto w-[300px] text-center text-white rounded-[8px] py-[16px] ff-red-hat-display font-medium text-[32px] bg-[#770C00] mb-[70px] block wow fadeInUp"
          :to="{ name: 'Rsvp' }"
        >RSVP</router-link>

        <p class="max-w-[610px] text-center text-[#555] text-[20px] mb-[20px] font-normal mx-auto leading-[30px] wow fadeInUp">Unfortunately, we can only accommodate specific number of guests. <br> Please check your invitation/message for the number of seats allotted for you.</p>

        <router-link 
          class="block underline max-w-max text-center text-[#555] text-base mb-[40px] font-normal mx-auto leading-[30px] wow fadeInUp"
          :to="{ name: 'Faqs' }"
        >Got more questions? check out our <span class="font-medium text-[#770C00]">FAQ</span> page.</router-link>
      
        <h1 class="text-center text-[48px] ff-adelio-darmanto tracking-[3px] lowercase  wow fadeInUp">#<span class="text-[#9F5B4D] font-bold capitalize">Shiely</span>GotThe<span class="text-[#9F5B4D] font-bold capitalize">Jem</span></h1>
      </div>
    </div> 
  </div>
</template>

<script setup>
import WOW from 'wow.js'

new WOW().init()
</script>

