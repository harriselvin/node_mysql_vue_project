<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      data-bs-target="#editProduct"
    >
      Edit Product
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade"
      id="editProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Update Product
            </h1>
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
              <input type="text" v-model="productName" />
            </div>
  
            <div class="inputs">
              <label>Quantity</label>
              <input type="number" v-model="Quantity" />
            </div>
  
            <div class="inputs">
              <label>Price</label>
              <input type="number" v-model="Price" />
            </div>
  
            <div class="inputs">
              <label>Category</label>
              <input type="text" v-model="Category" />
            </div>
  
            <div class="inputs">
              <label>Image URL</label>
              <input type="url" v-model="imageURL" />
            </div>
  
          </div>
          <div class="modal-footer">
            <button type="button" @click="updateProd(productID)" class="">Save changes</button>
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
      async updateProd(id) {
          try {
              await axios.patch(` https://node-mysql-vue-project-60pu.onrender.com/Products/${id}`, {
                  productName: this.productName,
                  Quantity: this.Quantity,
                  Price: this.Price,
                  Category: this.Category,
                  imageURL: this.imageURL,
              });
              this.productName= "";
              this.Quantity = "";
              this.Price= ""; 
              this.Category= "";
              this.imageURL= "";
              alert("Product Has Been Updated");
              window.location.reload();
          } catch (error) {
              alert (error);
          }
      },
    },
  };
  </script>
  
  <style scoped>

  </style>