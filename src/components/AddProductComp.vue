<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>Add New Product</h2>
      <form @submit.prevent="addProduct">
        <label for="productName">Product Name:</label>
        <input v-model="product.productName" type="text" id="productName" required />

        <label for="quantity">Quantity:</label>
        <input v-model="product.quantity" type="number" id="quantity" required />

        <label for="price">Price:</label>
        <input v-model="product.price" type="number" step="0.01" id="price" required />

        <label for="category">Category:</label>
        <input v-model="product.category" type="text" id="category" required />

        <label for="imageURL">Image URL:</label>
        <input v-model="product.imageURL" type="text" id="imageURL" />

        <button type="submit">Add Product</button>
        <button type="button" @click="close">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['show'],
  data() {
    return {
      product: {
        productName: '',
        quantity: null,
        price: null,
        category: '',
        imageURL: '',
      },
    };
  },
  methods: {
    async addProduct() {
      try {
        await axios.post(' https://node-mysql-vue-project-60pu.onrender.com/products', this.product);
        this.$emit('product-added');
        this.close();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 5px 0;
}

input {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
}
</style>
