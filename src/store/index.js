import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [], // Initialize products as an empty array
  },
  mutations: {
    // Mutation to set products in the store
    setProducts(state, products) {
      state.products = products;
    },
    // Mutation to sort products by price
    sortProductsByPrice(state) {
      state.products.sort((a, b) => a.price - b.price);
    },
    // Mutation to sort products by name
    sortProductsByName(state) {
      state.products.sort((a, b) => a.productName.localeCompare(b.productName));
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://your-api-url/products'); // Replace with your API URL
        commit('setProducts', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        commit('setProducts', []); // Default to an empty array on error
      }
    },
  },
  getters: {
    // Optionally add getters for more complex data transformations
  },
});

