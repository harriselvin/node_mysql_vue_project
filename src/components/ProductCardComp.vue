<template>
  <router-link :to="{ name: 'product', params: { id: product.prodId } }">
    <div class="card">
      <img
        :src="product.prodUrl"
        class="card-img-top"
        :alt="product.prodName"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.prodName }}</h5>
        <p class="card-text">Price: R {{ product.amount }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  margin: 1rem;
  overflow: hidden;
}
.card-img-top {
  width: 100%;
  height: auto;
}
.card-body {
  padding: 1rem;
}
.card-title {
  margin-bottom: 0.75rem;
}
.card-text {
  margin-bottom: 0;
}
</style>
