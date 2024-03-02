<template>
  <div>
    <Button 
      class="px-[20px] justify-center"
      @click="showModal = true"
      v-text="`Import Users`"
    />
  
    <Modal
      :show="showModal"
      :title="`Import Users`"
      :show-footer="false"
      body-class="pb-4"
      wrapper-class="lg:max-w-[700px]"
      @close="() => {
        resetFileUploadModal();
        showModal = false;
      }"
    >
      <div class="p-[10px_5px_0px_5px]">
        <div class="relative border-2 border-dashed border-gray-400 hover:border-gray-900 w-full h-[180px] rounded flex items-center justify-center cursor-pointer mb-3">
          <input 
            id="file"
            ref="file"
            type="file" 
            class="h-full w-full absolute top-0 left-0 opacity-0 text-[0] cursor-pointer"
            @input="(ev) => {
              form.file = ev.target.files[0]
            }"
          >

          <div v-if="!form.file" class="text-center flex flex-col items-center">
            <ArrowDownTrayIcon
              class="w-6 mb-3"
            />
            <p class="w-[120px] leading-4 text-[11px] " v-text="`Click or Drop to upload a file`"/>
          </div>

          <p v-else class="italic text-green-500" v-text="form.file.name"/>
        </div>

        <div v-if="results.length" class="text-[11px]">
          <p 
            v-for="result in results"
            :key="result"
            :class="[
              result.indexOf('Failed') > -1 ? 'text-red-500' : 'text-green-500 '
            ]"
            v-text="`- ${result}`"
          />
        </div>

        <div class="flex justify-end gap-5 pt-2">
          <Button 
            class="px-[20px] justify-center"
            :variant="!form.file ? 'disabled' : 'primary'"
            :disabled="!form.file"
            @click="upload"
            v-text="`Upload`"
          />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { REQUEST_UPLOAD_USERS } from '@/store/modules/admin'
import {
  Button,
  Modal
} from '@/components/common' 
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'

const store = useStore()
const dispatch = store.dispatch
const emit = defineEmits(['success'])

const showModal = ref(false)
const form = ref({
  file: null
})
const results = ref([])
const file = ref(null)

 
const upload = async () => {
  results.value = []

  let params = new FormData()
  params.append('file', form.value.file)
  const res = await dispatch(REQUEST_UPLOAD_USERS, params)
  if(res.status === 201){
    results.value = res.data.results
    emit('success')

    setTimeout(() => {
      showModal.value = false
    }, 4000);
  }
}

const resetFileUploadModal = () => {
  form.value.file = null
  document.getElementById('file').value = ''
  results.value = []
}
</script>
