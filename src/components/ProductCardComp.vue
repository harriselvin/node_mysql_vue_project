<template>
  <router-link :to="{ name: 'product', params: { id: product.productID } }">
    <div class="card">
      <img
        :src="product.imageURL"
        class="card-img-top"
        :alt="product.productName"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.productName }}</h5>
        <p class="card-text">Price: R {{ product.Price }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style scoped>

@media only screen and (max-width: 700px) {
    .card {
        width: 18rem;
    }
    .card-img-top {
        width: 16rem;
        height: 14rem;
    }
}

@media only screen and (max-width: 450px) {
    .card {
        width: 16rem;
    }
    .card-img-top {
        width: 14rem;
        height: 16rem;
    }
}
</style>