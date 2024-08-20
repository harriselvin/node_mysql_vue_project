<template>
  <div>
    <h1 class="text-center m-3 animate__animated animate__fadeInLeft">Products</h1>
    <div class="options">
      <div class="search">
        <input type="text" v-model="search" placeholder="Search" />
      </div>
      <div>
        <button @click="sortByPrice" class="sort">Sort by Price</button>
        <button @click="sortByName" class="sort">Sort by Name</button>
      </div>
    </div>
  
    <div v-if="filteredProducts.length > 0" class="display container-fluid">
      <ProductCardComp
        v-for="product in filteredProducts"
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
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import ProductCardComp from '@/components/ProductCardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    ProductCardComp,
    SpinnerComp
  },
  setup() {
    const store = useStore();
    const search = ref('');
    const sortOrder = ref(''); // 'price' or 'name'
    
    const products = computed(() => store.state.products);
    
    onMounted(() => {
      store.dispatch('fetchProducts');
    });
    
    const filteredProducts = computed(() => {
      const searchLower = search.value.toLowerCase();
      return products.value
        .filter(product => product.name.toLowerCase().includes(searchLower))
        .sort((a, b) => {
          if (sortOrder.value === 'price') {
            return a.price - b.price;
          } else if (sortOrder.value === 'name') {
            return a.name.localeCompare(b.name);
          }
          return 0;
        });
    });

    const sortByPrice = () => {
      sortOrder.value = 'price';
    };

    const sortByName = () => {
      sortOrder.value = 'name';
    };

    return {
      search,
      filteredProducts,
      sortByPrice,
      sortByName
    };
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

