import { createStore } from 'vuex';
import axios from 'axios';

axios.defaults.withCredentials = true;

const url = "https://node-mysql-vue-project-60pu.onrender.com/";

export default createStore({
  state: {
    products: [],
    product: null,
    users: [],
    user: null,
    asc: true,
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT(state, product) {
      state.product = product;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    SORT_BY_PRICE(state) {
      state.products.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    SORT_BY_NAME(state) {
      state.products.sort((a, b) => {
        if (a.prodName < b.prodName) return -1;
        if (a.prodName > b.prodName) return 1;
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
  },

  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${url}products`);
        commit('SET_PRODUCTS', response.data.results);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProduct({ commit }, id) {
      try {
        const response = await axios.get(`${url}product/${id}`);
        commit('SET_PRODUCT', response.data.result);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
    async getUsers({ commit }) {
      try {
        const response = await axios.get(`${url}users`);
        commit('SET_USERS', response.data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
  },
});