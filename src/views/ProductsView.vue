<template>
  <div class="container">
    <div class="products-title">
      <h1>Products</h1>
    </div>
    <div class="container">
        <!-- Options (Search and Sort) -->
        <div class="options row mb-4">
          <div class="col-md-6">
            <div class="search">
              <input type="text" v-model="searchQuery" class="form-control" placeholder="Search" />
            </div>
          </div>
          <div class="col-md-6 text-md-right">
            <button @click="sortByPrice" class="sort">Sort by Price</button>
            <button @click="sortByName" class="sort">Sort by Name</button>
          </div>
        </div>
      <div class="row gap-2 justify-content-center my-2" v-if="filteredProducts">
          <card-comp v-for="product in filteredProducts" v-bind:key="product.prodId">
              <template #cardHeader>
                  <img :src="product.prodUrl" loading="lazy" class="img-fluid" style="height: 200px;" :alt="product.prodName">
              </template>
              <template #cardBody>
                  <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                  <p class="lead"><span class="amount fw-bold">Amount</span>: R{{ product.amount }}</p>
                  <div class="button-wrapper d-md-flex d-block justify-content-between">
                      <router-link class="prod-btn" :to="{name:'product',params:{id:product.prodId}}">
                        <button class="btn btn-dark" value="0">Go to Product</button>
                      </router-link>
                  </div>
              </template>
            </card-comp>
      </div>
      <div v-else>
        <SpinnerComp v-if="loading" />
      </div>
  </div>
  </div>
</template>

<script setup>
/*eslint-disable*/
import { useStore } from 'vuex'
import { computed, onMounted, ref  } from 'vue'
import SpinnerComp from '@/components/SpinnerComp.vue'
import CardComp from '@/components/CardComp.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const products = computed(() => store.state.products)
const searchQuery = ref('')

onMounted(() => {
  store.dispatch('fetchProducts')
})

function sortByPrice() {
  store.dispatch('sortByPrice')
}

function sortByName() {
  store.dispatch('sortByName')
}

const loading = computed(() => store.state.loading)

const filteredProducts = computed(() => {
  if (products.value === null) {
    return []
  }
  return products.value.filter(product => {
    return product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})
</script>


<style scoped>

.options {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
}

input {
  color: #eeebdd !important;
  border: 2px solid #00bcd4;
  background: #00bcd4 !important;
  border-radius: 20px;
}

::placeholder {
  color: #eeebdd;
}

.sort {
  background: #00bcd4;
  color: #eeebdd;
  border: 2px solid #00bcd4;
  border-radius: 30px;
  width: 120px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-left: 20px;
}

.sort:hover {
  color: #eeebdd;
  background: #00bcd4;
  box-shadow: 0 0 30px 5px #00bcd4;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.products-title {
  padding: 40px 0;
  margin-bottom: 20px;
  font-family: "Silkscreen", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
}
.display-2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.gap-2 {
  gap: 20px;
}
.my-2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.prod-btn{
  width: 100%;
}
.btn {
  margin: 10px;
}
.mg-fluid{
  z-index: -6;
}
.lead > .amount{
  color: #00bcd4;
}
</style>

