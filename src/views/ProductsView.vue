<template>
  <div>
    <!-- Main Banner Area -->
    <div class="page-heading" id="top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="inner-content">
              <h2>Check Our Products</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Products Area -->
    <section class="products-page" id="products">
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
        <div v-if="filteredProducts.length > 0" class="row justify-content-center">
          <div v-for="product in filteredProducts" :key="product.prodId" class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card">
              <img :src="product.prodUrl" :alt="product.prodName" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">Price: {{ product.amount }}</p>
                <router-link to="/single" class="btn-product">View More</router-link>
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

.options {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
}

input {
  color: #eeebdd !important;
  border: 2px solid #00bcd4;
  background: #00bcd4 !important;
  border-radius: 20px;
}

::placeholder {
  color: #eeebdd;
}

.sort {
  background: #00bcd4;
  color: #eeebdd;
  border: 2px solid #00bcd4;
  border-radius: 30px;
  width: 120px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-left: 20px;
}

.sort:hover {
  color: #eeebdd;
  background: #00bcd4;
  box-shadow: 0 0 30px 5px #00bcd4;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.display {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

.row.justify-content-center {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4.5rem;
}

.page-heading {
  background-color: #f8f9fa;
  padding: 40px 0;
  margin-bottom: 20px;
}

.page-heading .inner-content h2 {
  margin-bottom: 10px;
  font-size: 2rem;
  color: #343a40;
}

.page-heading .inner-content span {
  display: block;
  font-size: 1rem;
  color: #6c757d;
}

.search input {
  border-radius: 0.25rem;
}

.btn-outline-primary {
  border-color: #007bff;
  color: #007bff;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: #fff;
}

.card {
  background: #1b1b1b; 
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  padding: 15px;
  width: 250px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); 
}

.card-img-top {
  width: 100%; 
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
}

.card-body {
  padding: 5px;
  margin: 10px;
}

.card-title {
  font-size: 1em;
  color: #00bcd4; /* Teal color for product names */
  margin: 10px 0;
}
.card-text {
  font-size: 1.2em;
  color: #eee; 
}

.btn btn-primary {
  background: #00bcd4; /* Teal background */
  color: #eee; /* Light text color */
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  transition: background 0.3s, box-shadow 0.3s;
  margin-top: 15px;
  text-decoration: none;
}

.btn btn-primary  {
  background: #03a9f4; /* Lighter blue background on hover */
  box-shadow: 0 4px 8px rgba(0, 188, 212, 0.4); /* Subtle shadow on hover */
}

/* Pagination */
.pagination .page-item.active .page-link {
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
}

.pagination .page-link {
  border-radius: 0.25rem;
}

/* Responsive adjustments */
@media (max-width: 767.98px) {
  .col-lg-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>