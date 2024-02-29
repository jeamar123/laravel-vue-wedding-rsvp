import { createStore } from 'vuex'
import rsvp from './modules/rsvp'
import admin from './modules/admin'

export const UPDATE_ROOT_STATE = 'UPDATE_ROOT_STATE'
export const UPDATE_LOADING_STATE = 'UPDATE_LOADING_STATE'

export const UPDATE_ENTRANCE_LOADER_STATE = 'UPDATE_ENTRANCE_LOADER_STATE'

export default createStore({
  state: {
    loader: {
      show: false,
      message: 'Loading...',
    },
    showEntranceLoader: true
  },
  getters: {},
  mutations: {
    async [UPDATE_LOADING_STATE](state, payload) {
      state.loader = { ...state.loader, ...payload }
    },
    async [UPDATE_ENTRANCE_LOADER_STATE](state, payload) {
      state.showEntranceLoader = payload
    },
  },
  actions: {},
  modules: {
    rsvp,
    admin
  },
})
