<template>
  <div class="container">
    <div class="row text-center">
      <h2 class="display-2">Welcome to A & E Electronics</h2>
      <p>Your one-stop shop for the latest in cutting-edge technology and innovative electronic solutions.</p>
      <p>At A&E Electronics, we are dedicated to providing top-quality products and exceptional customer service. Explore our diverse range of electronics designed to enhance your digital experience and stay ahead of the tech curve.</p>
      <p>Thank you for choosing A&E Electronics. We're excited to help you find the perfect tech solutions!</p>
      <button @click="exploreProducts">Explore Products</button>
    </div>

    <div class="row">
      <h4 class="display-4">Recent products</h4>
    </div>
    <div class="row gap-2 justify-content-center" v-if="recentProducts">

      <Card v-for="product in recentProducts" :key="product.productID">
        <template #cardHeader>
          {{ product.productURL }}
          <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
        </template>
        <template #cardBody>
          <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
          <p class="lead">{{ product.prodDescription }}</p>
          <p class="lead"><span class="text-success fw-bold">Amount</span>: R{{ product.amount }}</p>
        </template>
      </Card>
    </div>
    <div v-else>
      <Spinner />
    </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Spinner from '@/components/Spinner.vue'

export default {
  name: 'HomeView',
  components: {
    Card,
    Spinner
  },
  computed: {
    recentProducts() {
      return this.$store.state.recentProducts
    }
  },
  methods: {
    exploreProducts() {
      this.$router.push('/products'); // Assuming you want to navigate to a products page
    }
  },
  mounted() {
    this.$store.dispatch('fetchRecentProducts'); // Ensure this action is correctly defined in your store
  }
}
</script>

<style scoped>
.container {
  padding: 20px;
}

.text-center {
  text-align: center;
}

button {
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: #218838;
}
</style>
