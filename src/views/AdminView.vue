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
        <button @click="showUserModal = true" class="addButton">Add User</button>
      </div>
      <div class="userTable">
        <table>
          <thead>
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
          </thead>
          <tbody v-if="!loading && users.length > 0">
            <tr v-for="user of users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.userName }}</td>
              <td class="remove">{{ user.lastName }}</td>
              <td class="emailHead">{{ user.emailAdd }}</td>
              <td class="remove">{{ user.gender }}</td>
              <td class="remove">{{ user.age }}</td>
              <td><button @click="delUser(user.userID)" class="delButton">Delete</button></td>
              <td><EditUserComp /></td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="8">No users available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
    <div class="productSection">
      <div class="titles">
        <h3>Products</h3>
        <button @click="showProductModal = true" class="addButton">Add Product</button>
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
          <tbody v-if="!loading && products.length > 0">
            <tr v-for="product of products" :key="product.productID">
              <td class="remove">{{ product.productID }}</td>
              <td>{{ product.productName }}</td>
              <td class="remove">{{ product.quantity }}</td>
              <td class="remove">{{ product.price }}</td>
              <td class="imgHead">{{ product.category }}</td>
              <td class="imgHead"><img :src="product.imageURL" :alt="product.productName" /></td>
              <td><button @click="delProduct(product.productID)" class="delButton">Delete</button></td>
              <td><EditProductComp /></td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="8">No products available</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- User Modal -->
    <AddUserComp
      :show="showUserModal"
      @close="showUserModal = false"
      @user-added="refreshData"
    />

    <!-- Product Modal -->
    <AddProductComp
      :show="showProductModal"
      @close="showProductModal = false"
      @product-added="refreshData"
    />
  </div>
</template>

<script>
import AddUserComp from "@/components/AddUserComp.vue";
// import AddProductComp from "@/components/AddProductComp.vue";
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
          this.$store.dispatch("getProducts"),
          this.$store.dispatch("getUsers")
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
    // AddProductComp,
    EditProductComp,
    EditUserComp,
    SpinnerComp // Register Spinner component
  },
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #fff;
}

img {
  height: 80px;
  width: 80px;
}

.admin-title {
  padding: 40px 0;
  margin-bottom: 20px;
  font-family: "Silkscreen", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: black;
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
  background-color: #00bcd4;
  color: #fff;
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
  color: #fff;
  border: 2px solid #00bcd4;
  border-radius: 30px;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
}

.delButton:hover {
  color: #fff;
  background: #0097a7;
  box-shadow: 0 0 30px 5px #0097a7;
  transition: all 0.2s ease-out;
}

/* Media Queries */
@media only screen and (max-width: 700px) {
  .imgHead, .emailHead {
    display: none;
  }
  table {
    width: 100%;
  }
}

@media only screen and (max-width: 305px) {
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
