<template>
  <div class="h-screen flex flex-col">
    <div class="bg-slate-800 flex items-center justify-between gap-5 mb-5 h-[61px] px-5 py-3">
      <div class="flex items-center gap-2 text-white text-sm">
        <div class="py-1 px-2 border border-gray-400 rounded">
          <label class="" v-text="`Pending: `"/>
          {{ `${users.filter(({response}) => response === 'pending').length}` }}
        </div>
        <div class="py-1 px-2 border border-gray-400 rounded">
          <label class="" v-text="`Joining: `"/>
          {{ `${users.filter(({response}) => response === 'joining').length}` }}
        </div>
        <div class="py-1 px-2 border border-gray-400 rounded">
          <label class="" v-text="`Not Joining: `"/>
          {{ `${users.filter(({response}) => response === 'not_joining').length}` }}
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between mb-3 px-5">
      <div class="w-[300px] relative">
        <MagnifyingGlassIcon
          class="absolute top-3 left-2 w-5"
        />
        <input 
          type="text"
          v-model="searchText"
          class="rounded border border-gray-300 bg-white w-full py-2 pr-3 pl-8 outline-none"
          placeholder="Search"
        >
      </div>
      <div class="flex items-center gap-3">
        <AddUser
          @success="getUsers"
        />
        <ImportUser
          @success="getUsers"
        />
      </div>
    </div>

    <div class="px-5">
      <div class="flex items-center mb-1">
        <p v-text="`Showing ${users.length} results`"/>
      </div>

      <div class="bg-white rounded pb-5">
        <div class="table-scrollable overflow-x-auto border-b">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="rounded-tl-md text-left bg-slate-800 text-white py-3 pl-5 pr-1 font-medium" v-text="`Name`"/>
                <th class="text-left bg-slate-800 text-white py-3 px-1 font-medium" v-text="`Email`"/>
                <th class="text-left bg-slate-800 text-white py-3 px-1 font-medium" v-text="`Response`"/>
                <th class="text-left bg-slate-800 text-white py-3 px-1 font-medium" v-text="`Group`"/>
                <th class="bg-slate-800 rounded-tr-md py-3 pl-1 pr-5 w-20"></th>
              </tr>
            </thead>
            <tbody class="text-sm xl:text-base">
              <tr
                v-for="user in filteredUsers"
                :key="user.id"
              >
                <td class="py-3 pl-5 pr-1 border-b border-[#eee] font-medium" v-text="user.full_name"/>
                <td class="py-3 px-1 border-b border-[#eee] font-light" v-text="user.email || 'N/A'"/>
                <td class="py-3 px-1 border-b border-[#eee] font-light">
                  <div 
                    :class="[
                      'py-1 px-2 rounded-md w-max text-xs',
                      user.response === 'joining' ? 'bg-emerald-400' : 
                      user.response === 'not_joining' ? 'bg-rose-400' : 'bg-amber-400'
                    ]"
                  >{{ 
                    user.response === 'joining' ? 'Joining' :
                    user.response === 'not_joining' ? 'Not going' : 'Pending'
                  }}</div>
                </td>
                <td class="py-3 px-1 border-b border-[#eee] font-light italic" v-text="user.group"/>
                <td class="py-3 pl-1 pr-5 border-b border-[#eee] font-light">
                  <div class="flex gap-2 justify-end">
                    <UpdateUser 
                      :user="user"
                      @success="getUsers"
                    />
                    <DeleteUser 
                      :user="user"
                      @success="getUsers"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { REQUEST_GET_USERS} from '@/store/modules/admin'
import {
  Button,
  Modal
} from '@/components/common' 
import ImportUser from '@/components/Admin/ImportUser.vue'
import AddUser from '@/components/Admin/AddUser.vue'
import UpdateUser from '@/components/Admin/UpdateUser.vue'
import DeleteUser from '@/components/Admin/DeleteUser.vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const store = useStore()
const dispatch = store.dispatch
const router = useRouter()

const users = computed(() => store.state.admin.users)

const searchText = ref('')

const filteredUsers = computed(() => {
  if(searchText.value !== ''){
    return users.value.filter((user) => {
      return user.full_name.toLowerCase().includes(searchText.value.toLowerCase())
    })
  }
  return users.value
})

onMounted(async () => {
  getUsers()
})

const getUsers = async () => {
  const res = await dispatch(REQUEST_GET_USERS)
  if(res.status === 401) router.push({ name: 'AdminLogin' })
}

</script>

<style>
.table-scrollable {
  overflow: auto;
  max-height: 700px;
}
.table-scrollable thead th {
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>