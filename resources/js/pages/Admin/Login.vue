<template>
  <div class="h-screen bg-[#eee] flex items-center justify-center ff-outfit">
    <div class="min-h-[268px] max-w-[400px] w-11/12 bg-white rounded-md py-4 px-5">
      <h5 class="text-center text-xl font-medium mb-8" v-text="`Login`"/>
      <form novalidate @submit.prevent="login">
        <input 
          type="text" 
          class="mb-5 w-full border-b font-light py-2 outline-none"
          placeholder="Username"
          v-model="form.username"
        >

        <input 
          type="password" 
          class="mb-5 w-full border-b font-light py-2 outline-none"
          placeholder="Password"
          v-model="form.password"
        >

        <small class="text-red-500" v-text="err_message"/>

        <div class="w-full pt-7">
          <Button
            type="submit"
            btn-type="primary"
            btn-size="md"
            text-size="lg"
            class="w-full justify-center"
            v-text="`Go`"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Button
} from '@/components/common' 
import { REQUEST_ADMIN_LOGIN } from '@/store/modules/admin'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const dispatch = store.dispatch
const router = useRouter()

const form = ref({
  username: 'admin',
  password: 'admin',
})
const err_message = ref('')

const login = async () => {
  if(!form.value.username || !form.value.password){
    err_message.value = 'username and password is required.'
    return false
  }

  let params = {
    username: form.value.username,
    password: form.value.password,
  }

  const res = await dispatch(REQUEST_ADMIN_LOGIN, params)
  console.log(res)
  if(res.status !== 400){
    router.push({ name: 'Users' })
  }else{
    err_message.value = res.data.message
  }
}
</script>
