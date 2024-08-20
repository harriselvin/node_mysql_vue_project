<template>
    <h1 class="text-center m-3 animate__animated animate__fadeInLeft">
      Products
    </h1>
    <div class="options">
      <div class="search">
        <input type="text" v-model="search" placeholder="search" />
      </div>
      <div>
        <button @click="sortByPrice" class="sort">Sort by Price</button>
        <button @click="sortByName" class="sort">Sort by Name</button>
      </div>
    </div>
  
    <div v-if="Products" class="display container-fluid">
      <ProductCardComp
        v-for="product of Products"
        :key="product.productID"
        :product="product"
      />
    </div>
    <div v-else class="d-flex justify-content-center">
      <spinner-comp/>
    </div>
  </template>
  
  <script>
  import ProductCardComp from "@/components/ProductCard-comp.vue";
  import SpinnerComp from '@/components/SpinnerComp.vue';
  export default {
    data() {
      return {
        search: "",
        Categories: "All",
      };
    },
    methods: {
      sortByPrice() {
        this.$store.commit("sortProducts");
      },
      sortByName() {
        this.$store.commit("sortByName");
      },
    },
    computed: {
      Products() {
        return this.$store.state.products?.filter((product) => {
          let isMatch = true;
          if (
            !product.productName.toLowerCase().includes(this.search.toLowerCase())
          ) {
            isMatch = false;
          }
          if (
            this.Categories !== "All" &&
            this.Categories !== product.Categories
          ) {
            isMatch = false;
          }
          return isMatch;
        });
      },
    },
    mounted() {
      this.$store.dispatch("getProducts");
    },
    components: {
      ProductCardComp,
      SpinnerComp,
    },
  };
  </script>
  
  <style scoped>

  
  </style>