import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
// import router from '@/router'
import swal from 'sweetalert'
import { applyToken } from '@/service/AuthenticatedUser.js'

const { cookies } = useCookies()
const apiURL = 'https://node-mysql-vue-project-60pu.onrender.com'
applyToken(cookies.get('LegitUser')?.token)

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    recentProducts: null,
    product: null
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setRecentProducts(state, value) {
      state.recentProducts = value
    },
    setProduct(state, value) {
      state.product = value
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const res = await axios.get(`${apiURL}/products`)
        console.log(res.data)
        commit('setProducts', res.data)
      } catch (error) {
        console.error('Error fetching products:', error)
        await swal(`Server down or route does not exist`, "Try again", "error")
      }
    },
    async fetchProduct({ commit }, id) {
      try {
        const res = await axios.get(`${apiURL}/products/${id}`)
        commit('setProduct', res.data)
      } catch (error) {
        console.error('Error fetching product:', error)
        await swal(`Error fetching product`, "Try again", "error")
      }
    },
    // Define other actions...
  },
  modules: {}
})
