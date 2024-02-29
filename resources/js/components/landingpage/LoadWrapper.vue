<template>
  <div
    class="fixed z-[99] top-0 left-0 h-screen w-full flex items-center justify-center bg-[rgb(255,255,255,0.99)]"
  >
    <div class="text-center relative cursor-pointer" @click="emit('hide')">
      <div class="wow tada animate__animated animate__infinite">
        <HeartIcon class="block mx-auto mb-5 w-12" />
      </div>
      <button class="font-medium text-xl">Enter</button>
    </div>
  </div>
</template>

<script setup>
import WOW from 'wow.js'
import { HeartIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['hide'])

new WOW().init()
</script>
