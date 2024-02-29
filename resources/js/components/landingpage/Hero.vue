<template>
  <section id="home">
    <scroll-parallax
      :speed="0.5"
    >
      <div 
        class="h-[900px] relative flex flex-col justify-center bg-no-repeat bg-center 2xl:bg-top bg-cover bg-[rgba(0,0,0,0.15)] md:bg-[rgba(0,0,0,0.05)]"
        :style="{
          'background-image' : `url('images/wedding-hero.jpeg')`,
          'background-blend-mode': `multiply`,
        }"
      > 
        <scroll-parallax
          :speed="0.5"
          :down="true"
        >
          <div class="relative sm:pt-10 xl:pt-32" >
            <div class="flex items-center justify-center gap-[25px] mb-[30px] wow fadeInUp" style="text-shadow: 2px 2px 10px #000;">
              <h3 class="text-white ff-adelio-darmanto text-[30px] sm:text-[40px] lg:text-[40px] font-light italic tracking-[2px] md:tracking-[4.5px] sm:leading-[50px] md:leading-[55px] text-center">The Wedding Celebration of</h3>
            </div>

            <div 
              class="flex flex-col items-center gap-10 md:gap-5" 
              style="text-shadow: 2px 2px 20px #000;" 
            >
              <img src="/images/flower-line.png" alt="flower-line" class="w-[250px] wow fadeInUp" data-wow-delay="0.5s">
              <h1 class="flex flex-wrap md:gap-6 flex-col md:flex-row items-center justify-center text-white ff-great-vibes text-[130px] lg:text-[160px] 2xl:text-[150px] leading-[100px] md:leading-1 wow fadeInUp" data-wow-delay="1s">
                Jmar
                <span class="ff-dreamland mb-6 md:mb-0">
                  <span class="text-[80px] md:text-[160px]">&</span>
                </span>
                Shiely
              </h1>
              <img src="/images/flower-line.png" alt="flower-line" class="w-[250px] wow fadeInUp" data-wow-delay="1.5s">
            </div>
          </div>
        </scroll-parallax>
      </div>
    </scroll-parallax>
  </section>
</template>

<script setup>
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue'
import WOW from 'wow.js'

new WOW().init()
</script>
