<template>
    <div>
        <h2>Product Details</h2>
    </div>
    <div>
      <!-- Spinner for loading state -->
      <div v-if="loading" class="d-flex justify-content-center">
        <SpinnerComp />
      </div>
      
      <!-- Product Details -->
      <div v-if="!loading && product">
        <h5 class="card-title">{{ product.productName }}</h5>
        <div class="recent">
          <Card class="product-card">
            <template #cardHeader>
              <img :src="product.productUrl" :alt="product.productName" class="card-image">
            </template>
            <template #cardBody>
              <div class="card-content">
                <p class="card-quantity">Quantity: {{ product.quantity }}</p>
                <p class="card-amount">Price: {{ product.amount }}</p>
                <div class="button">
                  <button class="card-button">Go back</button>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
      
      <!-- Message for when product is not available -->
      <div v-else>
        <p>No product available</p>
      </div>
    </div>
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  import SpinnerComp from '@/components/SpinnerComp.vue';
  
  export default {
    components: {
      Card, 
      SpinnerComp,
    },
    data() {
      return {
        loading: true, // Initialize loading state
      };
    },
    computed: {
      product() {
        return this.$store.state.product; // Adjust according to your store state
      }
    },
    async mounted() {
      try {
        this.loading = true;
        await this.$store.dispatch("fetchProduct", this.$route.params.id); // Adjust according to your action
      } finally {
        this.loading = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
  .recent {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  .product-card {
    flex: 1 1 calc(33.333% - 20px);
    box-sizing: border-box;
  }
  .card-image {
    height: 300px;
    border-radius: 30px;
    margin: 20px;
    transition: transform 0.3s;
  }
  .card-image:hover {
    transform: scale(1.1);
  }
  .button {
    margin-top: 10px;
  }
  @media only screen and (max-width: 701px) {
    .product-card {
      flex: 1 1 100%;
    }
  }
  </style>
  