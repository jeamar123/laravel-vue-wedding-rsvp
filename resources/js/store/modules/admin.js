import axios from 'axios'
axios.defaults.adminBaseURL = import.meta.env.VITE_APP_ADMIN_API_URL
axios.defaults.apiKey = import.meta.env.VITE_APP_AUTHORIZATION

import { UPDATE_LOADING_STATE } from '@/store/index'

export const UPDATE_ADMIN_STATE = 'UPDATE_ADMIN_STATE'

export const REQUEST_ADMIN_LOGIN = 'REQUEST_ADMIN_LOGIN'
export const REQUEST_ADMIN_LOGOUT = 'REQUEST_ADMIN_LOGOUT'
export const REQUEST_GET_USERS = 'REQUEST_GET_USERS'
export const REQUEST_UPLOAD_USERS = 'REQUEST_UPLOAD_USERS'
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER'
export const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER'
export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER'

const state = {
  admin: {},
  users: [],
}

const getters = {}

const mutations = {
  async [UPDATE_ADMIN_STATE](state, payload) {
    if (payload.users) state.users = payload.users
  },
}

const actions = {
  getHeaders() {
    return  {
      headers: {
        'x-access-token': axios.defaults.apiKey,
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
    }
  },

  async [REQUEST_ADMIN_LOGIN]({ commit }, params) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios.post(`${axios.defaults.adminBaseURL}/login`, params, {
        headers: {
          'x-access-token': axios.defaults.apiKey,
        }
      })
        .then(res => {
          console.log(res);
          let token = res.data.token;
          axios.defaults.headers.common["Authorization"] = token
          localStorage.setItem("token", token)
          commit(UPDATE_ADMIN_STATE, { 
            isLoggedIn: true          
          })
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(res)
        })
        .catch(err => {
          // console.log(err.response)
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(err.response)
        })
    })
  },

  async [REQUEST_ADMIN_LOGOUT]({ commit }) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios.defaults.headers.common["Authorization"] = null
      localStorage.removeItem("token")
      commit(UPDATE_ADMIN_STATE, { 
        isLoggedIn: false          
      })
      commit(UPDATE_LOADING_STATE, { show: false })
      resolve(true)
    })
  },

  async [REQUEST_GET_USERS]({ commit }) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios
        .get(`${axios.defaults.adminBaseURL}/users`, actions.getHeaders())
        .then((res) => {
          console.log(res)
          commit(UPDATE_ADMIN_STATE, { 
            users: res.data.users
          })
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(res)
        })
        .catch((err) => {
          console.log(err.response)
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(err.response)
        })
    })
  },

  async [REQUEST_UPLOAD_USERS]({ commit }, params) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios.post(`${axios.defaults.baseURL}/invited/upload`, params, {
        headers: {
          'Content-Type': 'multipart/form-data',
          ...actions.getHeaders().headers
        }
      })
        .then(res => {
          // console.log(res);
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(res)
        })
        .catch(err => {
          // console.log(err.response)
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(err.response)
        })
    })
  },

  async [REQUEST_CREATE_USER]({ commit }, params) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios.post(`${axios.defaults.baseURL}/invited/create`, params, actions.getHeaders())
        .then(res => {
          // console.log(res);
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(res)
        })
        .catch(err => {
          // console.log(err.response)
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(err.response)
        })
    })
  },

  async [REQUEST_UPDATE_USER]({ commit }, params) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios.patch(`${axios.defaults.baseURL}/invited/update/${params.id}`, params.data, actions.getHeaders())
        .then(res => {
          console.log(res);
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(res)
        })
        .catch(err => {
          // console.log(err.response)
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(err.response)
        })
    })
  },

  async [REQUEST_DELETE_USER]({ commit }, params) {
    return new Promise((resolve) => {
      commit(UPDATE_LOADING_STATE, { show: true })
      axios.delete(`${axios.defaults.baseURL}/invited/delete/${params.id}`, actions.getHeaders())
        .then(res => {
          // console.log(res);
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(res)
        })
        .catch(err => {
          // console.log(err.response)
          commit(UPDATE_LOADING_STATE, { show: false })
          resolve(err.response)
        })
    })
  },
}

export default { state, getters, mutations, actions }
