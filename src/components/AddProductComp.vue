<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class=""
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Add a Product
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body">
          <div class="inputs">
            <label>Product Name</label>
            <input
              type="text"
              v-model="productName"
            /><br />
          </div>

          <div class="inputs">
            <label>Quantity</label>
            <input type="number" v-model="Quantity" /><br />
          </div>

          <div class="inputs">
            <label>Price</label>
            <input type="number" v-model="Price" /><br />
          </div>

          <div class="inputs">
            <label>Category</label>
            <input type="text" v-model="Category" /><br />
          </div>

          <div class="inputs">
            <label>Image URL</label>
            <input type="url" v-model="imageURL" /><br />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="addNewProd()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productName: "",
      Quantity: "",
      Price: "",
      Category: "",
      imageURL: "",
    };
  },
  methods: {
    async addNewProd() {
      try {
        await axios.post('https://node-mysql-vue-project-60pu.onrender.com/products/addProduct', {
          productName: this.productName,
          Quantity: this.Quantity,
          Price: this.Price,
          Category: this.Category,
          imageURL: this.imageURL,
        });
        this.productName = "";
        this.Quantity = "";
        this.Price = "";
        this.Category = "";
        this.imageURL = "";
        alert("Product Has Been Added");
        this.loadData()
      } catch (error) {
        console.error("Error adding product:",  error);
        
        alert("Error adding product");
      }
    },
    refreshData() {
      this.loadData(); // Reload data
    },
  },
};
</script>

<style scoped>
button {
  background: #00bcd4;
  color: #eeebdd;
  border: 2px solid #00bcd4;
  width: 120px;
  border-radius: 30px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 15px;
  margin-bottom: 15px;
}

button:hover {
  color: #eeebdd;
  background: #00bcd4;
  box-shadow: 0 0 30px 5px #00bcd4;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.modal-content {
  background: #1b1717 !important;
  color: #eeebdd !important;
  display: block;
}

input {
  color: #eeebdd !important;
  border: 2px solid #00bcd4;
  background: #00bcd4!important;
  border-radius: 20px;
  margin: 15px;
  width: 60%;
}

::placeholder {
    color: #eeebdd;
}
</style>
