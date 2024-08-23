<template>
  <div>
    <!-- Spinner for loading state -->
    <SpinnerComp v-if="loading" />

    <div class="admin-title">
      <h1>Admin</h1>
    </div>

  <div class="userSection">
    <div class="titles">
      <h3>Users</h3>
      <div>
        <add-user-comp />
      </div>
    </div>
    <div class="userTable">
      <table>
        <tr>
          <th>userID</th>
          <th>First Name</th>
          <th class="remove">Last Name</th>
          <th class="emailHead">Email Address</th>
          <th class="remove">Gender</th>
          <th class="remove">Age</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
        <tbody v-for="user of users" :key="user.userID" :user="user">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td class="remove">{{ user.lastName }}</td>
            <td class="emailHead">{{ user.emailAdd }}</td>
            <td class="remove">{{ user.gender }}</td>
            <td class="remove">{{ user.userAge }}</td>
            <td><button @click="delUser(user.userID)" class="delButton">Delete</button></td>
            <td>
              <edit-user-comp/>
            </td>
          </tr>
          <tbody v-else>
            <tr>
              <td colspan="8">No users available</td>
            </tr>
          </tbody>
        </tbody>
      </table>
    </div>
  </div>

  <div class="productSection">
    <div class="titles">
      <h3>Products</h3>
      <div>
        <add-product-comp />
      </div>
    </div>
    <div class="productsTable">
      <table>
        <thead>
          <tr>
            <th class="remove">Product ID</th>
            <th>Product Name</th>
            <th class="remove">Quantity</th>
            <th class="remove">Price</th>
            <th class="imgHead">Category</th>
            <th class="imgHead">Image</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody
          v-for="product of products"
          :key="product.productId"
          :product="product"
        >
          <tr v-if="products">
            <td class="remove">{{ product.prodId }}</td>
            <td>{{ product.prodName }}</td>
            <td class="remove">{{ product.quantity }}</td>
            <td class="remove">{{ product.amount }}</td>
            <td class="imgHead">{{ product.category }}</td>
            <td class="imgHead"><img :src="product.prodUrl" :alt="product.productName" /></td>
            <td>
              <button @click="delProduct(product.productID)" class="delButton">Delete</button>
            </td>
            <td>
                <edit-product-comp/>
            </td>
          </tr>
          <tbody v-else>
            <tr>
              <td colspan="8">No products available</td>
            </tr>
          </tbody>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
import AddUserComp from "@/components/AddUserComp.vue";
import AddProductComp from "@/components/AddProductComp.vue";
import EditProductComp from '@/components/EditProductComp.vue';
import EditUserComp from "@/components/EditUserComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue"; // Import Spinner
import axios from "axios";

export default {
  data() {
    return {
      showUserModal: false,
      showProductModal: false,
      loading: true, // Add loading state
    };
  },
  created() {
    this.loadData();
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    async loadData() {
      try {
        this.loading = true;
        await Promise.all([
          this.$store.dispatch("fetchProducts"),
          this.$store.dispatch("fetchUsers")
        ]);
      } finally {
        this.loading = false;
      }
    },
    async delProduct(id) {
      try {
        await axios.delete(`https://node-mysql-vue-project-60pu.onrender.com/products/${id}`);
        this.loadData(); // Reload data
        alert("Product Removed");
      } catch (error) {
        alert(error.message);
      }
    },
    async delUser(id) {
      try {
        await axios.delete(`https://node-mysql-vue-project-60pu.onrender.com/users/${id}`);
        this.loadData(); // Reload data
        alert("User Removed");
      } catch (error) {
        alert(error.message);
      }
    },
    refreshData() {
      this.loadData(); // Reload data
    },
  },
  components: {
    AddUserComp,
    AddProductComp,
    EditProductComp,
    EditUserComp,
    SpinnerComp // Register Spinner component
  },
};
</script>

<style scoped>

.admin-title {
  padding: 40px 0;
  margin-bottom: 20px;
  font-family: "Silkscreen", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
}
img {
  height: 80px;
  width: 80px;
}

table {
  width: 90%;
  text-align: center;
  margin: auto;
}
th {
  border: 2px solid #00bcd4;
  width: 150px;
  padding: 10px;
}

td {
  padding: 10px;
  border: 2px solid #00bcd4;
}

.titles {
  width: 90%;
  margin: auto;
}

.userSection, .productSection {
    margin: 20px;
}

.delButton {
    background: #00bcd4;
  color: #eeebdd;
  border: 2px solid #00bcd4;
  border-radius: 30px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.delButton:hover {
     color: #eeebdd;
  background: #00bcd4;
  box-shadow: 0 0 30px 5px #00bcd4;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

@media only screen and (max-width: 700px) {
  .imgHead, .emailHead{
    display: none;
  }
  table {
    width: 100%;
  }
 
}

@media only screen and (max-width: 305px){
  .remove {
    display: none;
  }
  table {
    width: 100%;
  }
  .userSection, .productSection {
    margin-right: auto;
  }
}
</style>