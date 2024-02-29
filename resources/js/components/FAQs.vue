<template>
  <div 
    v-for="faq in faqs"
    :key="faq.index"
    class="mb-7"
  >
    <div 
      class="flex items-start text-[#770C00] gap-1 cursor-pointer"
      @click="faq.show = !faq.show"
    >
      <div class="shrink-0 pt-[2px]">
        <InformationCircleIcon
          class="w-5"
        />
      </div>
      <div class="flex-1 text-sm md:text-base font-semibold" v-text="faq.question"/>
      <div class=" pt-[2px]">
        <ChevronDownIcon
          class="w-4"
        />
      </div>
    </div>

    <div v-if="faq.show" class="pl-4 pt-3">
      <p class="text-sm md:text-base" v-html="faq.answer"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { InformationCircleIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'

const faqs = ref([
  {
    question: 'Are we allowed to bring whoever we want?',
    answer: 'Unfortunately, we can only accomodate specific number of guests. Please check your invitation for your number of seats alloted to you.',
    show: false
  },
  {
    question: 'Are children/infants invited?',
    answer: 'The couple already advised specific guests who can bring their children/infants. Thank you for understanding.',
    show: false
  },
  {
    question: 'When is the deadline to RSVP?',
    answer: 'We`d appreciate it if you could RSVP early. But please let us know before 2nd of January, 2023.',
    show: false
  },
  {
    question: 'What should we bring?',
    answer: 'Please bring your invitation card indicating your name and number of seat for your seat number in the reception.',
    show: false
  },
  {
    question: 'We would love to give you a gift.',
    answer: 'With all that we have, we are already blessed, but if you want to give us a gift, any amount will give us a lift.<br>If you also wish to give us things, you can refer to our wishlist. <a class="underline hover:text-gray-600" href="https://docs.google.com/spreadsheets/d/1Zsn8qkGbtbTNEhdEVUQXeW8hJjENxddndgAQPbqMqCE/edit?usp=sharing" target="_blank">Click here!</a>',
    show: false
  },
])
</script>
