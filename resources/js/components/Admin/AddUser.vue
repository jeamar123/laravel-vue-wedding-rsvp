<template>
  <div>
    <Button 
      class="px-[20px] justify-center"
      @click="showModal = true"
      v-text="`Add User`"
    />
  
    <Modal
      :show="showModal"
      :title="`Add User`"
      :show-footer="false"
      body-class="pb-4"
      @close="() => {
        showModal = false;
      }"
    >
      <div class="p-[10px_5px_0px_5px]">
        <form novalidate @submit.prevent="submit" autocomplete="off">
          <div class="mb-3">
            <label class="text-xs font-bold mb-1 block" v-text="`First Name`" />
            <input 
              type="text" 
              class="w-full border-b pb-1 pt-2 outline-none focus:border-slate-800"
              name="first_name"
              autocomplete="off"
              v-model="form.first_name"
            >
            <span v-if="form.errors.first_name" class="block text-xs text-red-500" v-text="form.errors.first_name[0]"/>
          </div>

          <div class="mb-3">
            <label class="text-xs font-bold mb-1 block" v-text="`Last Name`" />
            <input 
              type="text" 
              class="w-full border-b pb-1 pt-2 outline-none focus:border-slate-800"
              name="last_name"
              autocomplete="off"
              v-model="form.last_name"
            >
            <span v-if="form.errors.last_name" class="block text-xs text-red-500" v-text="form.errors.last_name[0]"/>
          </div>

          <div class="mb-3">
            <label class="text-xs font-bold mb-1 block" v-text="`Email`" />
            <input 
              type="text" 
              class="w-full border-b pb-1 pt-2 outline-none focus:border-slate-800"
              name="email"
              autocomplete="off"
              v-model="form.email"
            >
            <span v-if="form.errors.email" class="block text-xs text-red-500" v-text="form.errors.email[0]"/>
          </div>
          
          <div class="mb-3">
            <label class="text-xs font-bold mb-1 block" v-text="`Group`" />
            <input 
              type="text" 
              class="w-full border-b pb-1 pt-2 outline-none focus:border-slate-800"
              name="group"
              autocomplete="off"
              v-model="form.group"
            >
            <span v-if="form.errors.group" class="block text-xs text-red-500" v-text="form.errors.group[0]"/>
          </div>

          <small class="text-red-500" v-text="err_message"/>

          <div class="w-full pt-7 flex items-center justify-end">
            <Button
              type="submit"
              class="py-3 px-[18px]"
              v-text="`Submit`"
            />
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { REQUEST_CREATE_USER } from '@/store/modules/admin'
import {
  Button,
  Modal
} from '@/components/common' 

const store = useStore()
const dispatch = store.dispatch
const emit = defineEmits(['success'])

const showModal = ref(false)
const form = ref({
  first_name: null,
  last_name: null,
  full_name: null,
  email: null,
  group: '',
  errors: {}
})
const err_message = ref('')


const submit = async () => {
  let params = {
    first_name: form.value.first_name,
    last_name: form.value.last_name,
    email: form.value.email,
    group: form.value.group
  }

  let res = await dispatch(REQUEST_CREATE_USER, params)
  console.log(res)
  if(res.status === 201){
    showModal.value = false
    emit('success')
  }else{
    form.value.errors = res.data.errors
    err_message.value = res.data.message
  }
}
</script>
