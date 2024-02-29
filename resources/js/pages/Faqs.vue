<template>
  <div class="max-h-screen">
    <Header />
    <div class="flex flex-col min-h-screen pt-[65px] md:pt-[75px]">
      <div class="flex-1 pt-10 md:pt-20 overflow-y-auto bg-[#F6F2E7]">
        <div class="mx-5 md:mx-auto md:max-w-[768px] md:w-full">
          <h1 class="text-xl md:text-3xl mb-10">FAQs</h1>
          <FAQs />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FAQs from '@/components/FAQs.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>