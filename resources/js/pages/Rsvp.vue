<template>
  <div class="max-h-screen">
    <Header />
    <div class="fixed top-[65px] md:top-[75px] left-0 h-[5px] w-full">
      <div class="h-full bg-[#770C00] transition-all duration-[2] ease-in-out" :style="{ width: `${step*25}%` }"></div>
    </div>
    <div class="flex flex-col min-h-screen pt-[65px] md:pt-[75px]">
      <div class="flex-1 pt-10 md:pt-20 overflow-y-auto bg-[#F6F2E7]">
        <!-- <StepOne 
          v-if="step === 1" 
          class="flex-1"
          @success="step = 2"
          @back="$router.go({ name: 'Main' })"
        />
        <StepTwo 
          v-if="step === 2" 
          class="flex-1"
          @success="step = 3"
          @back="step -= 1"
          @finish="step = 4"
          @reset="reset"
        />
        <StepThree 
          v-if="step === 3" 
          class="flex-1"
          @success="step = 4"
          @back="step -= 1"
        />
        <StepDone 
          v-if="step === 4" 
          class="flex-1"
          @reset="reset"
        /> -->
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import StepOne from '@/components/RsvpForm/StepOne.vue'
// import StepTwo from '@/components/RsvpForm/StepTwo.vue'
// import StepThree from '@/components/RsvpForm/StepThree.vue'
// import StepDone from '@/components/RsvpForm/StepDone.vue'

const step = ref(1)

const reset = () => {
  window.location.reload()
}
</script>