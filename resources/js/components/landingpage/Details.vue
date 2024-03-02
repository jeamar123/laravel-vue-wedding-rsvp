<template>
  <section id="details" class="relative bg-[#F6F2E7] border-b border-[#E1D5B3] py-[80px] md:py-[150px] z-20 border-b border-[#E1D5B3] shadow-[0_0_25px_rgba(0,0,0,0.35)]">
    
    <div class="max-w-[1280px] mx-auto px-7 md:px-[100px]">
      <div class="flex flex-col-reverse md:flex-row items-start gap-[50px] mb-[50px]">
        <div class="w-full md:w-1/2" >
          <h1 class="ff-great-vibes text-[#9F5B4D] text-[52px] mb-[50px] text-center wow fadeInUp">Details</h1>
          <p class="underline text-[#9F5B4D] text-[22px] mb-[20px] wow fadeInUp" data-wow-delay="0.5s">Ladies:</p>
          <p class="text-[#555] text-[20px] mb-[30px] leading-[26px] wow fadeInUp" data-wow-delay="0.5s">Knee or ankle-length dresses, Blouses with slacks or skirts and formal jumpsuits.</p>

          <p class="underline text-[#9F5B4D] text-[22px] mb-[20px] wow fadeInUp" data-wow-delay="0.5s">Gentlemen:</p>
          <p class="text-[#555] text-[20px] mb-[30px] leading-[26px] wow fadeInUp" data-wow-delay="0.5s">Long sleeved shirts or  buttoned-down shirts.</p>
        </div>
        <div class="hidden md:block bg-[#766032] w-[1px] h-[400px]"></div>
        <div class="w-full md:w-1/2 wow fadeInUp" >
          <h1 class="ff-great-vibes text-[#9F5B4D] text-[52px] mb-[80px] text-center wow fadeInUp">Dress Code</h1>
          <p class="text-[#555] text-[20px] mb-[50px] text-center leading-[26px] wow fadeInUp" data-wow-delay="0.5s">Please come looking lovely and elegant in your formal outfits in the colors maroon, taupe or nude.</p>

          <div class="flex items-center mx-auto justify-center gap-2 md:gap-[40px] wow fadeInUp" data-wow-delay="0.5s">
            <div class="w-[80px] h-[80px] rounded-md bg-[#811A17] border border-[#E1D5B3]"></div>
            <div class="w-[80px] h-[80px] rounded-md bg-[#BB8377] border border-[#E1D5B3]"></div>
            <div class="w-[80px] h-[80px] rounded-md bg-[#FEF6F0] border border-[#E1D5B3]"></div>
            <div class="w-[80px] h-[80px] rounded-md bg-[#D2B48C] border border-[#E1D5B3]"></div>
          </div>
        </div>
      </div>
      <p class="text-center md:font-medium text-xl sm:text-[24px] wow fadeInUp" data-wow-delay="0.5s">Please do not wear White, no slippers and tattered jeans.</p>
    </div> 
  </section>
</template>

<script setup>
import WOW from 'wow.js'

new WOW().init()
</script>
