import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [], 
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    sortProductsByPrice(state) {
      state.products.sort((a, b) => a.price - b.price);
    },

    sortProductsByName(state) {
      state.products.sort((a, b) => a.productName.localeCompare(b.productName));
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://node-mysql-vue-project-60pu.onrender.com/products'); 
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        commit('setProducts', []); 
      }
    },
  },
  getters: {
    allProducts: (state) => state.products,
    productById: (state) => (id) => state.products.find(product => product.prodId === id),
    productsByCategory: (state) => (category) => state.products.filter(product => product.category === category),
  },
});
