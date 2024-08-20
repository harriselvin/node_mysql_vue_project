<template>
    <h1 class="text-center animate__animated animate__fadeInUp">Admin</h1>
    <div class="userSection">
      <div class="titles">
        <h3>Users</h3>
        <div>
          <AddUserComp />
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
              <td>{{ user.userName }}</td>
              <td class="remove">{{ user.lastName }}</td>
              <td class="emailHead">{{ user.emailAdd }}</td>
              <td class="remove">{{ user.gender }}</td>
              <td class="remove">{{ user.age }}</td>
              <td><button @click="delUser(user.userID)" class="delButton">Delete</button></td>
              <td>
                <edit-user-comp/>
              </td>
            </tr>
            <tr v-else>
              no
            </tr>
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
            :key="product.productID"
            :product="product"
          >
            <tr v-if="products">
              <td class="remove">{{ product.productID }}</td>
              <td>{{ product.productName }}</td>
              <td class="remove">{{ product.Quantity }}</td>
              <td class="remove">{{ product.Price }}</td>
              <td class="imgHead">{{ product.Category }}</td>
              <td class="imgHead"><img :src="product.imageURL" :alt="product.productName" /></td>
              <td>
                <button @click="delProduct(product.productID)" class="delButton">Delete</button>
              </td>
              <td>
                  <edit-product-comp/>
              </td>
            </tr>
            <tr v-else>
              no
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import AddUserComp from "@/components/AddUser-comp.vue"
  import AddProductComp from "@/components/AddProduct-comp.vue"
  import EditProductComp from '@/components/EditProduct-comp.vue'
  import EditUserComp from "@/components/EditUser-comp.vue"
  import axios from "axios"
  export default {
    created() {
      this.$store.dispatch("getProducts"), this.$store.dispatch("getUsers");
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
          await axios.delete(
            `https://node-mysql-vue-project-60pu.onrender.com/Products/${id}`
          );
          this.$store.dispatch("getProducts");
          alert("Product Removed");
          window.location.reload();
        } catch (error) {
          alert(error);
        }
      },
      async delUser(id) {
        try {
          await axios.delete(`https://node-mysql-vue-project-60pu.onrender.com/user/${id}`);
          this.$store.dispatch("getUsers");
          alert("This user has been removed");
          window.location.reload();
        } catch (error) {
          alert(error);
        }
      },
    },
    components: {
      AddUserComp,
      AddProductComp,
      EditProductComp,
      EditUserComp
    },
  };
  </script>
  