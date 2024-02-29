<template>
  <header
    class="w-full z-[9999] h-[65px] md:h-[75px] px-5 md:px-20 flex items-center justify-end md:justify-center fixed left-0 top-0 ff-dreamland" 
    :class="[
      ' ',
      isOtherPage || (headerCoordinatesY >= browserHeight || isMobileMenuShown) ? 'bg-[rgba(234,231,217,0.8)] md:bg-[#eae7d9] border-b border-[rgba(0,0,0,0.05)]' : 'bg-[rgba(0,0,0,0.10)] ',
    ]"
  >
   <!-- border-b border-[rgba(222,222,222,0.20)]  -->
    <button 
      id="mobile-menu-btn"
      :class="[
        'block md:hidden border w-10 h-10 flex items-center justify-center rounded text-white',
        isOtherPage || (headerCoordinatesY >= browserHeight || isMobileMenuShown) ? 'border-[#9f5b4e] bg-[#9f5b4e]' : 'border-white ',
      ]"
      @click="isMobileMenuShown = !isMobileMenuShown"
    >
      <Bars3Icon
        class="w-10"
      />
    </button>

    <div 
      id="header-navigation" 
      :class="[
        'absolute top-[65px] md:top-0 left-0 md:left-auto w-full md:w-auto md:relative md:flex flex-col md:flex-row items-center gap-7 bg-[rgba(234,231,217,0.8)] md:bg-transparent',
        isMobileMenuShown ? 'block md:flex' : 'hidden md:flex'
      ]"
    >
      <div
        v-for="(el, index) in routes"
        :key="el"
        class="flex items-center gap-8"
      >
        <router-link 
          :to="
            isOtherPage ?
              el === 'rsvp' ? { name: 'Rsvp' } : { name: 'Landingpage', hash: `#${el}`}
            : `#${el}`
          " 
          :class="[
            'px-5 md:px-0 py-2 md:py-3 text-xl md:text-3xl font-bold capitalize cursor-pointer tracking-[3px] c-transition w-full md:w-auto',
            $route.name === 'Rsvp' && el === 'rsvp' ? 'text-[#9f5b4e] underline' : '',
            $route.name === 'Faqs' && el === 'faqs' ? 'text-[#9f5b4e] underline' : '',
            !isOtherPage ? 
              headerCoordinatesY >= browserHeight ? 
                (
                  compareCoords(`#${el}`) ? 
                    'text-[#952d1b] underline' :
                    'text-[#1A1A1A] hover:text-[#952d1b] hover:underline'
                ) : (
                  
                  el === 'home' ? 
                    'text-[#952d1b] underline' :
                    'text-[#1A1A1A] md:text-[#eee] hover:underline'
                ) : '',
          ]"
          @click="isMobileMenuShown = false"
        >
          {{ el }}
        </router-link>

        <HeartIcon
          v-if="index !== routes.length-1"
          :class="[
            'hidden md:block w-3',
            headerCoordinatesY >= browserHeight ? 'text-[#cc988d]' : 'text-[#eee]'
          ]"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { HeartIcon, Bars3Icon } from '@heroicons/vue/24/outline'

const route = useRoute()
const isOtherPage = computed(() => ['Rsvp', 'Faqs'].includes(route.name))

const headerCoordinatesY = ref(0)
const browserHeight = ref(document.documentElement.clientHeight - 75)
const routes = ref(['home', 'schedule', 'details', 'rsvp'])
const isMobileMenuShown = ref(false)

onMounted(() => {
  window.addEventListener("scroll", () => {
    headerCoordinatesY.value = window.pageYOffset
  }, false)

  window.addEventListener('resize', () => {
    browserHeight.value =  window.innerHeight - 75
  })
  
  window.addEventListener('click', (e) => {
    if(
      !e.target.closest('#mobile-menu-btn') &&
      e.target.id !== 'mobile-menu-btn' &&
      !e.target.closest('#header-navigation')
    ){
      isMobileMenuShown.value = false
    }
  })
})

const compareCoords = (element) => {
  let el = document.querySelector(element)
  if(el){
    let { y } = el.getBoundingClientRect()
    let elHeight = -Math.abs(el.offsetHeight - 75)
    return (y < 75 && y > elHeight)
  }else{
    if(element === '#home' && window.pageYOffset === 0){
      return true
    }
  }
  return false
}

</script>
