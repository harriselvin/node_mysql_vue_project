<template>
  <div>
    <h1 class="text-center animate__animated animate__fadeInUp">Admin</h1>
    
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
          <tbody v-for="user of users" :key="user.userID">
            <tr v-if="users">
              <td>{{ user.userID }}</td>
              <td>{{ user.userName }}</td>
              <td class="remove">{{ user.lastName }}</td>
              <td class="emailHead">{{ user.emailAdd }}</td>
              <td class="remove">{{ user.gender }}</td>
              <td class="remove">{{ user.age }}</td>
              <td><button @click="delUser(user.userID)" class="delButton">Delete</button></td>
              <td><EditUserComp /></td>
            </tr>
            <tr v-else>
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
          <tbody v-for="product of products" :key="product.productID">
            <tr v-if="products">
              <td class="remove">{{ product.productID }}</td>
              <td>{{ product.productName }}</td>
              <td class="remove">{{ product.quantity }}</td>
              <td class="remove">{{ product.price }}</td>
              <td class="imgHead">{{ product.category }}</td>
              <td class="imgHead"><img :src="product.imageURL" :alt="product.productName" /></td>
              <td><button @click="delProduct(product.productID)" class="delButton">Delete</button></td>
              <td><EditProductComp /></td>
            </tr>
            <tr v-else>
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
import AddProductComp from "@/components/AddProductComp.vue";
import EditProductComp from '@/components/EditProductComp.vue';
import EditUserComp from "@/components/EditUserComp.vue";
import axios from "axios";

export default {
  created() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getUsers");
  },
  data() {
    return {
      showUserModal: false,
      showProductModal: false,
    };
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
    async delProduct(id) {
      try {
        await axios.delete(`https://your-api-url/products/${id}`);
        this.$store.dispatch("getProducts");
        alert("Product Removed");
      } catch (error) {
        alert(error.message);
      }
    },
    async delUser(id) {
      try {
        await axios.delete(`https://your-api-url/users/${id}`);
        this.$store.dispatch("getUsers");
        alert("User Removed");
      } catch (error) {
        alert(error.message);
      }
    },
    refreshData() {
      this.$store.dispatch("getProducts");
      this.$store.dispatch("getUsers");
    },
  },
  components: {
    AddUserComp,
    AddProductComp,
    EditProductComp,
    EditUserComp,
  },
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  color: #333; /* Default text color */
  background-color: #fff; /* Background color */
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
  border: 2px solid #00bcd4; /* Border color */
  width: 150px;
  padding: 10px;
  background-color: #00bcd4; /* Background color */
  color: #fff; /* Text color */
}

td {
  padding: 10px;
  border: 2px solid #00bcd4; /* Border color */
}

.titles {
  width: 90%;
  margin: auto;
}

.userSection, .productSection {
  margin: 20px;
}

.delButton {
  background: #00bcd4; /* Background color */
  color: #fff; /* Text color */
  border: 2px solid #00bcd4; /* Border color */
  border-radius: 30px;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
}

.delButton:hover {
  color: #fff; /* Text color */
  background: #0097a7; /* Slightly darker shade for hover */
  box-shadow: 0 0 30px 5px #0097a7; /* Slightly darker shade for hover */
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
