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
  text-align: center; /* Center-align text */
}

.page-heading h2 {
  margin: 0;
  font-size: 2.5rem;
}

.page-heading span {
  font-size: 1.25rem;
}

/* Section Styles */
.section {
  padding: 4rem 0;
}

/* Search & Sort Options */
.options {
  margin-bottom: 2rem;
}

.search input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.sort {
  margin: 0 10px;
  padding: 10px 20px;
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

/* Card Container Styles */
.card {
  background: #1b1b1b; /* Dark background for product items */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Soft shadow */
  text-align: center;
  padding: 15px;
  width: 250px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px); /* Slight lift effect on hover */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4); /* Enhanced shadow on hover */
}

/* Card Image Styles */
.card-img-top {
  width: 100%; /* Full width to fit the card */
  height: auto; /* Fixed height for the image */
  object-fit: cover; /* Ensure images cover the area */
  border-bottom: 2px solid #00bcd4; /* Teal border below image */
  transition: opacity 0.3s; /* Smooth transition for hover effect */
}

.card:hover .card-img-top {
  opacity: 0.9; /* Slightly fade image on hover */
}

/* Card Body Styles */
.card-body {
  padding: 15px;
}

/* Card Title Styles */
.card-title {
  font-size: 1.25em;
  color: #00bcd4; /* Teal color for titles */
  margin-bottom: 10px;
}

/* Card Text Styles */
.card-text {
  font-size: 1em;
  color: #ddd; /* Light grey for text */
  margin-bottom: 15px;
}

/* Button Styles */
.btn-primary {
  background-color: #00bcd4; /* Teal background for button */
  color: #fff; /* White text color */
  border: none; /* Remove default border */
  border-radius: 30px; /* Rounded corners */
  padding: 10px 20px; /* Padding for button */
  font-size: 1em; /* Font size */
  font-weight: bold; /* Bold text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Ensure it displays correctly */
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition */
}

.btn-primary:hover {
  background-color: #03a9f4; /* Lighter blue on hover */
  box-shadow: 0 4px 8px rgba(0, 188, 212, 0.4); /* Subtle shadow on hover */
}

/* Pagination Styles */
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

/* Responsive Design for Cards */
@media (max-width: 768px) {
  .card {
    border-width: 1px; /* Thinner border on smaller screens */
  }
  
  .card-img-top {
    height: 150px; /* Adjust height for smaller screens */
  }
}
</style>
