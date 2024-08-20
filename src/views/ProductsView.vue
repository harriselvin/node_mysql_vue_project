<template>
  <h1 class="text-center m-3 animate__animated animate__fadeInLeft">
    Products
  </h1>
  <div class="options">
    <div class="search">
      <input type="text" v-model="search" placeholder="Search Products" />
    </div>
    <div>
      <button @click="sortByPrice" class="sort">Sort by Price</button>
      <button @click="sortByName" class="sort">Sort by Name</button>
    </div>
  </div>

  <div v-if="Array.isArray(products) && products.length" class="display container-fluid">
    <ProductCardComp
      v-for="product in products"
      :key="product.productID"
      :product="product"
    />
  </div>
  <div v-else class="d-flex justify-content-center">
    <SpinnerComp />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ProductCardComp from "@/components/ProductCardComp.vue";
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  data() {
    return {
      search: "",
      category: "All",
    };
  },
  methods: {
    ...mapActions(['fetchProducts']),
    sortByPrice() {
      this.$store.commit("sortProductsByPrice");
    },
    sortByName() {
      this.$store.commit("sortProductsByName");
    },
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.productName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (
          this.category !== "All" &&
          this.category !== product.category
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.fetchProducts();
  },
  components: {
    ProductCardComp,
    SpinnerComp,
  },
};
</script>

<style scoped>
/* Add your styles here */
.options {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search input {
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.sort {
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.sort:hover {
  background-color: #0097a7;
}

.display {
  display: flex;
  flex-wrap: wrap;
}

.container-fluid {
  padding: 0 15px;
}
</style>
