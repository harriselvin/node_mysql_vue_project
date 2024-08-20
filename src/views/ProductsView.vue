<template>
  <div>
    <h1 class="text-center m-3 animate__animated animate__fadeInLeft">Products</h1>
    <div class="options">
      <div class="search">
        <input type="text" v-model="search" placeholder="search" />
      </div>
      <div>
        <button @click="sortByPrice" class="sort">Sort by Price</button>
        <button @click="sortByName" class="sort">Sort by Name</button>
      </div>
    </div>
  
    <div v-if="Products.length > 0" class="display container-fluid">
      <ProductCardComp
        v-for="product of Products"
        :key="product.productID"
        :product="product"
      />
    </div>
    <div v-else class="d-flex justify-content-center">
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import ProductCardComp from "@/components/ProductCardComp.vue";
import SpinnerComp from '@/components/SpinnerComp.vue';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      search: "",
      Categories: "All",
    };
  },
  computed: {
    ...mapState({
      Products: state => state.products
    }),
    filteredProducts() {
      return this.Products.filter(product => {
        let isMatch = true;
        if (
          !product.productName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (
          this.Categories !== "All" &&
          this.Categories !== product.Category
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  methods: {
    sortByPrice() {
      this.Products.sort((a, b) => a.price - b.price);
    },
    sortByName() {
      this.Products.sort((a, b) => a.productName.localeCompare(b.productName));
    }
  },
  components: {
    ProductCardComp,
    SpinnerComp
  }
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  color: #333; /* Default text color */
  background-color: #fff; /* Background color */
}

.container-fluid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.sort {
  margin: 10px;
  padding: 10px;
  background-color: #00bcd4; /* Background color */
  color: #fff; /* Text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sort:hover {
  background-color: #0097a7; /* Slightly darker shade for hover */
}
</style>
