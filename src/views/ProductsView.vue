<!-- <template>
  <div>
    <h1 class="text-center m-3 animate__animated animate__fadeInLeft">Products</h1>
    <div class="options">
      <div class="search">
        <input type="text" v-model="search" placeholder="Search" />
      </div>
      <div>
        <button @click="sortByPrice" class="sort">Sort by Price</button>
        <button @click="sortByName" class="sort">Sort by Name</button>
      </div>
    </div>
  
    <div v-if="Products.length > 0" class="display container-fluid">
      <ProductCardComp
        v-for="product in Products"
        :key="product.prodId"
        :product="product"
      />
    </div>
    <div v-else class="d-flex justify-content-center">
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import ProductCardComp from "@/components/ProductCardComp.vue";
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  data() {
    return {
      search: "",
      Categories: "All",
    };
  },
  methods: {
    sortByPrice() {
      this.$store.commit("sortByPrice");
    },
    sortByName() {
      this.$store.commit("sortByName");
    },
  },
  computed: {
    Products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.prodName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (
          this.Categories !== "All" &&
          this.Categories !== product.category
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  components: {
    ProductCardComp,
    SpinnerComp,
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

.container-fluid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.sort {
  margin: 10px;
  padding: 10px;
  background-color: #00bcd4; /* Background color */
  color: #fff; /* Text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sort:hover {
  background-color: #0097a7; /* Slightly darker shade for hover */
}
</style>
 -->
 <template>
  <div>
    <!-- Main Banner Area -->
    <div class="page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Check Our Products</h2>
              <span>Awesome & Creative HTML CSS layout by TemplateMo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Products Area -->
    <section class="section" id="products">
      <div class="container">
        <!-- Options (Search and Sort) -->
        <div class="options row mb-4">
          <div class="col-md-6">
            <div class="search">
              <input type="text" v-model="search" class="form-control" placeholder="Search" />
            </div>
          </div>
          <div class="col-md-6 text-md-right">
            <button @click="sortByPrice" class="sort">Sort by Price</button>
            <button @click="sortByName" class="sort">Sort by Name</button>
          </div>
        </div>

        <!-- Products Display -->
        <div v-if="filteredProducts.length > 0" class="row">
          <div v-for="product in filteredProducts" :key="product.prodId" class="col-lg-3 mb-4">
            <div class="card">
              <img :src="product.prodUrl" :alt="product.prodName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">Price: {{ product.amount }}</p>
                <a href="single-product.html" class="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="col-lg-12 mt-4">
            <div class="pagination">
              <ul class="pagination justify-content-center">
                <li v-for="page in pages" :key="page.number" :class="['page-item', { active: page.active }]">
                  <a href="#" class="page-link">{{ page.number }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Loading Spinner -->
        <div v-else class="d-flex justify-content-center">
          <SpinnerComp />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  data() {
    return {
      search: "",
      sortOrder: 'asc',
      products: [
        // Products data here
        {
          prodId: 1,
          prodName: "Ocean Pro 11 - 12.3 Touch Screen",
          quantity: 1,
          amount: "1426.63",
          category: "Tablets",
          prodUrl: "https://static.wixstatic.com/media/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png/v1/fill/w_416,h_416,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_a055ae2dfe6f457b9c2f6f3fa6d95126~mv2.png"
        },
        {
        prodId: 2,
        prodName: "Shel 50 Class LED 4K UHD Smart TV",
        quantity: 1,
        amount: "1783.29",
        category: "TV & Home Cinema",
        prodUrl: "https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg"
        },
        {
        prodId: 3,
        prodName: "Fitboot Inspire Fitness Tracker ",
        quantity: 1,
        amount: "1159.14",
        category: "Watches",
        prodUrl: "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg"
        },
        {
        prodId: 4,
        prodName: "Smartphone Z Pixel Max 128GB Unlocked",
        quantity: 1,
        amount: "1515.80",
        category: "Smartphones",
        prodUrl: "https://static.wixstatic.com/media/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg"
        },
        {
        prodId: 5,
        prodName: "White Buds Wireless Earbud Headphones",
        quantity: 1,
        amount: "1248.30",
        category: "Headphones",
        prodUrl: "https://static.wixstatic.com/media/c22c23_1752807cf4f14909a5928ba0cedb339e~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1752807cf4f14909a5928ba0cedb339e~mv2.jpg"
        },
        {
        prodId: 6,
        prodName: "SDK Portable Bluetooth Speaker",
        quantity: 1,
        amount: "1515.80",
        category: "Speakers",
        prodUrl: "https://static.wixstatic.com/media/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg/v1/fill/w_430,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg"
        },
        {
        prodId: 7,
        prodName: "JP Gaming Laptop 15.6 Laptop 256GB",
        quantity: 1,
        amount: "1783.29",
        category: "Computers",
        prodUrl: "https://static.wixstatic.com/media/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg/v1/fill/w_430,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg"
        },
        {
        prodId: 8,
        prodName: "Megapixel Waterproof Mini Digital Camera",
        quantity: 1,
        amount: "1248.30",
        category: "Cameras",
        prodUrl: "https://static.wixstatic.com/media/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.jpg/v1/fill/w_430,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.jpg"
        }
      ],
    };
  },
  methods: {
    sortByPrice() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      this.products.sort((a, b) => {
        return this.sortOrder === 'asc'
          ? parseFloat(a.amount) - parseFloat(b.amount)
          : parseFloat(b.amount) - parseFloat(a.amount);
      });
    },
    sortByName() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      this.products.sort((a, b) => {
        return this.sortOrder === 'asc'
          ? a.prodName.localeCompare(b.prodName)
          : b.prodName.localeCompare(a.prodName);
      });
    },
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        const nameMatch = product.prodName.toLowerCase().includes(this.search.toLowerCase());
        return nameMatch;
      });
    },
  },
  components: {
    SpinnerComp,
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

.page-heading {
  background-color: #00bcd4; /* Banner background color */
  color: white;
  padding: 2rem 0;
}

.page-heading h2 {
  margin: 0;
  font-size: 2.5rem;
}

.page-heading span {
  font-size: 1.25rem;
}

.section-heading h2 {
  color: #00bcd4;
}

.sort {
  margin: 10px;
  padding: 10px;
  background-color: #00bcd4; /* Background color */
  color: #fff; /* Text color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sort:hover {
  background-color: #0097a7; /* Slightly darker shade for hover */
}

.card {
  border: 1px solid #ddd; /* Border color */
  border-radius: 8px; /* Rounded corners */
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Shadow on hover */
}

.card-img-top {
  object-fit: cover;
  height: 200px; /* Adjust height as needed */
}

.card-body {
  background-color: #f8f9fa; /* Light background for card body */
  padding: 1.25rem;
}

.card-title {
  color: #00bcd4; /* Card title color */
}

.card-text {
  color: #333; /* Text color */
}

.btn-primary {
  background-color: #00bcd4;
  border-color: #00bcd4;
}

.btn-primary:hover {
  background-color: #0097a7;
  border-color: #00796b;
}

.pagination .page-item.active .page-link {
  background-color: #00bcd4;
  border-color: #00bcd4;
}

.pagination .page-link {
  color: #333;
}

.pagination .page-link:hover {
  color: #00bcd4;
  background-color: #f8f9fa;
}
</style>
