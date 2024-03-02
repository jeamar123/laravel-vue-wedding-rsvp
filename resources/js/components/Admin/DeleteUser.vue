<template>
  <div>
    <button
      class="bg-rose-600 rounded px-2 py-2 hover:opacity-90"
      @click="showModal = true"
    >
      <TrashIcon
        class="fill-white w-3"
      />
    </button>
  
    <Modal
      :show="showModal"
      :title="`Delete User`"
      :show-footer="false"
      body-class="pb-4"
      @close="showModal = false"
    >
      <div class="p-[10px_5px_0px_5px]">
        <form novalidate @submit.prevent="deleteUser" autocomplete="off">
          
          <p class="mg-10" v-text="`Are you sure you want to delete this User?`"/>

          <div class="w-full pt-7 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              class="py-3 px-[18px]"
              @click="showModal = false"
              v-text="`Cancel`"
            />
            <Button
              type="submit"
              variant="primary"
              class="py-3 px-[18px]"
              v-text="`Confirm`"
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
import { REQUEST_DELETE_USER } from '@/store/modules/admin'
import {
  Button,
  Modal
} from '@/components/common' 
import { TrashIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const store = useStore()
const dispatch = store.dispatch
const emit = defineEmits(['success'])

const showModal = ref(false)
const form = ref({
  full_name: props.user.full_name,
  email: props.user.email,
  group: props.user.group,
  errors: {}
})
const success = ref(false)


const deleteUser = async () => {
  let params = {
    id: props.user.id,
  }

  let res = await dispatch(REQUEST_DELETE_USER, params)
  console.log(res)
  if(res.status === 200){
    success.value = true
    emit('success')
  }else{
    form.value.errors = res.data.errors
  }
}
</script>
