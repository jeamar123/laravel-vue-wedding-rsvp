<template>
  <main class="bg-[#282828] font-sans scroll-smooth">
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
    </div>

    <audio id="canon-d-audio" loop class="absolute bottom-0">
        <source src="/canon-d-instrumental.mp3" type="audio/mp3">
      </audio>
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
import { useStore } from 'vuex'
import { UPDATE_ENTRANCE_LOADER_STATE } from '@/store/index'

const store = useStore()
const commit = store.commit

const showLoadWrapper = computed(() => store.state.showEntranceLoader)

const isAudioPlaying = ref(false)

const playAudio = () => {
  setTimeout(() => {
    document.getElementById("canon-d-audio").play()
    isAudioPlaying.value = true
  }, 300);
}

const hideEntranceLoader = () => commit(UPDATE_ENTRANCE_LOADER_STATE, false)

onMounted(() => {
  if(!isAudioPlaying.value){
    playAudio()
  }
})
</script>
