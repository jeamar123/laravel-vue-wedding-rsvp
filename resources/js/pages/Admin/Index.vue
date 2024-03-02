<template>
  <main class="bg-white ff-outfit font-sans scroll-smooth">
    <div class="flex h-full">
      <Sidemenu />
      <div class="flex-1 h-screen bg-[#eee]">
        <router-view/>
      </div>
    </div>
  </main>
</template>

<script setup>
import Sidemenu from '@/components/Admin/Sidemenu.vue'
</script>
