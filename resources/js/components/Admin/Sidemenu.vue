<template>
  <div class="w-[200px] bg-slate-900 h-screen flex flex-col justify-between gap-5">
    <div class="flex flex-col">
      <!-- <div class="h-[60px] bg-slate-800"></div> -->
      <div class="p-5">
        <router-link
          :to="{ name: 'Dashboard' }"
          :class="[
            'py-2 px-2 text-white text-base block',
            $route.name === 'Dashboard' ? 'underline' : 'hover:underline'
          ]"
          v-text="`Dashboard`"
        />
        <router-link
          :to="{ name: 'Users' }"
          :class="[
            'py-2 px-2 text-white text-base block',
            $route.name === 'Users' ? 'underline' : 'hover:underline'
          ]"
          v-text="`Users`"
        />
      </div>
    </div>

    <div class="px-5 pb-4">
      <div 
        class="p-2 text-white text-base text-center block cursor-pointer border rounded hover:opacity-80"
        @click="logout"
        v-text="`Logout`"
      />
    </div>
  </div>
</template>

<script setup>
import { REQUEST_ADMIN_LOGOUT } from '@/store/modules/admin'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const dispatch = store.dispatch
const router = useRouter()

const logout = async () => {
  const res = await dispatch(REQUEST_ADMIN_LOGOUT)
  if(res) router.push({ name: 'AdminLogin' })
}
</script>
