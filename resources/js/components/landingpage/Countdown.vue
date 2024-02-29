<template>
  <div class="relative bg-[#F6F2E7] border-b border-[#E1D5B3] flex items-center justify-center py-[80px] sm:py-[150px] shadow-[0_0_25px_rgba(0,0,0,0.35)] z-20 overflow-hidden">
    <img src="images/countdown-bg.png" alt="" class="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] scale-[1.6] sm:scale-125 md:scale-100 lg:w-[950px] lg:h-[550px] z-1">

    <div class="flex items-center gap-3 sm:gap-[40px] relative h-[300px] md:h-[550px]">
      <div class="text-center w-[80px]">
        <h3 class="text-[#9f5b4e] text-[40px] sm:text-[55px] ff-lemon-milk font-normal leading-[50px] sm:leading-[75px]">{{ datetime.days }}</h3>
        <p class="text-[#000] text-xl sm:text-2xl ff-adelio-darmanto tracking-[3px] font-bold capitalize">days</p>
      </div>
      <div class="text-center w-[80px]">
        <h3 class="text-[#9f5b4e] text-[40px] sm:text-[55px] ff-lemon-milk font-normal leading-[50px] sm:leading-[75px]">{{ datetime.hours }}</h3>
        <p class="text-[#000] text-xl sm:text-2xl ff-adelio-darmanto tracking-[3px] font-bold capitalize">hours</p>
      </div>
      <div class="text-center w-[80px]">
        <h3 class="text-[#9f5b4e] text-[40px] sm:text-[55px] ff-lemon-milk font-normal leading-[50px] sm:leading-[75px]">{{ datetime.minutes }}</h3>
        <p class="text-[#000] text-xl sm:text-2xl ff-adelio-darmanto tracking-[3px] font-bold capitalize">minutes</p>
      </div>
      <div class="text-center w-[80px]">
        <h3 class="text-[#9f5b4e] text-[40px] sm:text-[55px] ff-lemon-milk font-normal leading-[50px] sm:leading-[75px]">{{ datetime.seconds }}</h3>
        <p class="text-[#000] text-xl sm:text-2xl ff-adelio-darmanto tracking-[3px] font-bold capitalize">seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { countdownToDate, daysToDate } from '@/composables/date'

const datetime = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})
// const finalDatetime = '2022-07-24 11:29:00'
const finalDatetime = new Date('2025-01-28T13:00:00')
var interval = null

onMounted(() => {
  interval = setInterval(() => {
    if(new Date() >= new Date(finalDatetime)){
      clearInterval(interval)
      return false
    }
    initCountdown()
  }, 1000);
})

const initCountdown = () => {
  datetime.value = countdownToDate(finalDatetime)
  datetime.value.days = daysToDate(finalDatetime)
}
</script>
