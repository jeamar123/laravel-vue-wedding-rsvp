<template>
  <main class="bg-[#282828] h-screen overflow-y-auto font-sans">
    <LoadWrapper 
      v-if="showLoadWrapper"
      @hide="() => {
        playAudio();
        hideEntranceLoader(); 
      }"
    />
    <div :class="showLoadWrapper && 'hidden'">
      <Hero/>
      <Header />
      <Countdown />
      <Schedule />
      <Parents />
      <Details />
      <Registry />
      <Rsvp />
      <Footer />

      <audio id="canon-d-audio" loop class="absolute bottom-0">
        <source src="/canon-d-instrumental.mp3" type="audio/mp3">
      </audio>
    </div>
  </main>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import {
  LoadWrapper,
  Hero,
  Countdown,
  Schedule,
  Parents,
  Details,
  Registry,
  Rsvp,
} from '@/components/landingpage'

const showLoadWrapper = ref(true)
const isAudioPlaying = ref(false)

const playAudio = () => {
  setTimeout(() => {
    document.getElementById("canon-d-audio").play()
    isAudioPlaying.value = true
  }, 300);
}

const hideEntranceLoader = () => showLoadWrapper.value = false

onMounted(() => {
  if(!isAudioPlaying.value){
    playAudio()
  }
})
</script>
