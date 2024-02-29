import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL
// axios.defaults.withCredentials = true

import { UPDATE_LOADING_STATE } from '@/store/index'

export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE'
export const REQUEST_UPDATE_FORM = 'REQUEST_UPDATE_FORM'
export const REQUEST_CHECK_NAME = 'REQUEST_CHECK_NAME'
export const REQUEST_RESERVATION = 'REQUEST_RESERVATION'

const state = {
  form: {
    user: {},
    name: null,
    confirm: null,
    number_of_companions: 0,
    rsvp: null
  },
}

const getters = {}

const mutations = {
  async [UPDATE_FORM_STATE](state, payload) {
    if (payload.form) state.form = payload.form
  },
}

const actions = {
  getHeaders() {
    return  {
      headers: {
        'x-access-token': axios.defaults.apiKey,
      }
    }
  },

  async [REQUEST_UPDATE_FORM]({ commit }, params) {
    await commit(UPDATE_LOADING_STATE, { show: true })
    await commit(UPDATE_FORM_STATE, { 
      form: {
        ...state.form,
        ...params
      }
    })
    await commit(UPDATE_LOADING_STATE, { show: false })
    console.log(state.form)
    return true
  },

  async [REQUEST_CHECK_NAME]({ commit }, params) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios
        .post(`${axios.defaults.baseURL}/check-name`, params, actions.getHeaders())
        .then((res) => {
          console.log(res)
          commit(UPDATE_FORM_STATE, { 
            form: {
              ...state.form,
              user: {
                ...res.data.user,
                companions: res.data.companions
              },
              name: res.data.user.full_name,
              number_of_companions: res.data.companions?.list?.length || 0,
              rsvp: res.data.rsvp || null
            }
          })
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(res)
        })
        .catch((err) => {
          // console.log(err.response)
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(err.response)
        })
    })
  },

  async [REQUEST_RESERVATION]({ commit }, params) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      if(state.form.rsvp){
        axios
          .patch(`${axios.defaults.baseURL}/update/reservation`, params, actions.getHeaders())
          .then((res) => {
            console.log(res)
            commit(UPDATE_LOADING_STATE, { show: false })
            resolve(res)
          })
          .catch((err) => {
            // console.log(err.response)
            commit(UPDATE_LOADING_STATE, { show: false })
            resolve(err.response)
          })
      }else{
        axios
          .post(`${axios.defaults.baseURL}/create/reservation`, params, actions.getHeaders())
          .then((res) => {
            console.log(res)
            commit(UPDATE_LOADING_STATE, { show: false })
            resolve(res)
          })
          .catch((err) => {
            // console.log(err.response)
            commit(UPDATE_LOADING_STATE, { show: false })
            resolve(err.response)
          })
      }
    })
  },
}

export default { state, getters, mutations, actions }
