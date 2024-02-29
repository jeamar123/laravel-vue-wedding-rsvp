<template>
  <div id="rsvp"  class="relative bg-[#FFFDF6] border-b border-[#E1D5B3] py-[100px] md:py-[150px] z-10 border-b border-[#E1D5B3] flex items-center justify-center">
    <div class="text-center w-full max-w-[850px] px-7 md:px-[100px]">
      <!-- <h1 class="ff-dreamland font-normal text-[#9F5B4D] text-[64px] mb-[64px] text-center">Registry</h1>

      <button class="bg-[#F6F2E7] bg-opacity-80 hover:bg-opacity-100 w-11/12 md:w-[350px] text-[#000] text-3xl sm:text-[36px] md:font-medium py-[16px] hover:opacity-90 border border-[#d2bb87] hover:border-[#ad852c] rounded mb-[75px] shadow-md c-transition">SM Gift Registry</button> -->

      <div class="mx-auto">
        <p class="text-[#555] text-[24px] md:font-medium mb-[15px] wow fadeInUp">A note on gifts:</p>
        <p class="text-[#9F5B4D] text-[24px] font-normal mb-[35px] leading-[32px] md:leading-[28px] wow fadeInUp">With all that we have, we are already blessed but if you want to give us a gift, any amount will give us a lift.</p>

        <p class="text-[#333] text-[24px] md:font-medium leading-[32px] wow fadeInUp" data-wow-delay="0.5s">YOUR PRESENCE IS YOUR PRESENT.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import WOW from 'wow.js'

new WOW().init()
</script>
