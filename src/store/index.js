import { createStore } from 'vuex';

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
    setProducts: (state, value) => {
      state.products = value;
    },
    setProduct: (state, value) => {
      state.product = value;
    },
    setUsers: (state, value) => {
      state.users = value;
    },
    sortByPrice: (state) => {
      state.products.sort((a, b) => parseFloat(a.amount) - parseFloat(b.amount));
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
    sortByName: (state) => {
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
    fetchProducts: async ({ commit }) => {
      try {
        const res = await fetch(`${url}products`);
        if (!res.ok) throw new Error("Unable to fetch products");
        const products = await res.json();
        console.log(products.results);
        commit("setProducts", products.results);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Optionally handle the error in state or provide user feedback
      }
    },
    getProduct: async ({ commit }, id) => {
      try {
        const res = await fetch(`${url}product/${id}`);
        if (!res.ok) throw new Error("Unable to fetch product");
        const { result } = await res.json();
        console.log(result);
        commit("setProduct", result);
      } catch (error) {
        console.error("Error fetching product:", error);
        // Optionally handle the error in state or provide user feedback
      }
    },
    getUsers: async ({ commit }) => {
      try {
        const res = await fetch(`${url}users`);
        if (!res.ok) throw new Error("Unable to fetch users");
        const users = await res.json();
        console.log(users.results);
        commit("setUsers", users.results);
      } catch (error) {
        console.error("Error fetching users:", error);
        // Optionally handle the error in state or provide user feedback
      }
    },
  },
});
