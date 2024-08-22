<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Welcome to A&E Electronics!</h1>
        <p>Your one-stop shop for the latest in cutting-edge technology and innovative electronic solutions.</p>
        <router-link to="/about">
          <button class="learn-more">Learn More</button>
        </router-link>
      </div>
    </section>

    <!-- Best Sellers Section -->
    <section class="best-sellers">
      <h2>Best Sellers</h2>
      <div class="product-list">
        <!-- Product 1 -->
        <div class="product-item">
          <img src="https://static.wixstatic.com/media/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg/v1/fill/w_430,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg" alt="Product 1">
          <h3>JP Gaming Laptop 15.6 Laptop 256GB</h3>
          <p>R1783.29</p>
          <router-link to="/products" class="btn-product">See All Products</router-link>
        </div>
        
        <!-- Product 2 -->
        <div class="product-item">
          <img src="https://static.wixstatic.com/media/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg" alt="Product 2">
          <h3>Smartphone Z Pixel Max 128GB</h3>
          <p>R1515.80</p>
          <router-link to="/products" class="btn-product">See All Products</router-link>
        </div>
        
        <!-- Product 3 -->
        <div class="product-item">
          <img src="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_416,h_416,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg" alt="Product 3">
          <h3>Shel 50 Class LED 4K UHD Smart TV</h3>
          <p>R1783.29</p>
          <router-link to="/products" class="btn-product">See All Products</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Global styles */
.landing-page {
  font-family: "Silkscreen", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  background: #121212;
}

/* Hero Section */
.hero-section {
  background-image: url('https://asheekasamuels.github.io/All-Images/images/imageback.jpg');
  color: white;
  height: 80vh;
  text-align: center;
  padding: 20px;
  position: relative;
  background-repeat: repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.343),rgb(0, 0, 0, 0.241));
}

.hero-content {
  max-width: 800px;
  z-index: 1;
}

.hero-section h1 {
  font-size: 3.5em;
  color: #00bcd4;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 188, 212, 0.7); 
}

.hero-section p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0.8; 
}

button.learn-more {
  background: #00bcd4; 
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1em;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 10px rgba(0, 188, 212, 0.3); 
}

button.learn-more:hover {
  background: #03a9f4; 
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 188, 212, 0.4);
}

button.learn-more:active {
  background: #0288d1; /* Darker blue when clicked */
}

/* Best Sellers Section */
.best-sellers {
  background: #1e1e1e; /* Slightly lighter dark background */
  padding: 40px 20px;
  text-align: center;
}

.best-sellers h2 {
  font-size: 2.5em;
  color: #00bcd4; 
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(0, 188, 212, 0.5); 
}

/* Product List */
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Product Item Styles */
.product-item {
  background: #1b1b1b; 
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  text-align: center;
  padding: 15px;
  width: 250px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); 
}

.product-item img {
  width: 100%;
  height: auto; 
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
}

.product-item h3 {
  font-size: 1rem;
  color: #00bcd4;
  margin: 10px 0;
}

.product-item p {
  font-size: 1.2em;
  color: #eee; 
}

.btn-product {
  background: #00bcd4; 
  color: #eee;
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

.btn-product:hover {
  background: #03a9f4; 
  box-shadow: 0 4px 8px rgba(0, 188, 212, 0.4); 
}

/* Responsive Design */
@media only screen and (max-width: 705px) {
  .hero-section {
    height: auto; 
    padding: 10px;
    font-size: 0.8em; 
  }
  
  .hero-section h1 {
    font-size: 2em; 
  }
  
  .hero-section p {
    font-size: 0.9em; 
  }
  
  button.learn-more {
    padding: 10px 20px;
    font-size: 0.9em;
  }

  .best-sellers h2 {
    font-size: 1.8em; 
  }
  
  .product-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  }
  
  .product-item {
    width: 100%; 
    padding: 10px;
  }
  
  .product-item img {
    height: auto; 
  }
}

@media only screen and (max-width: 300px) {
  .hero-section {
    height: auto; 
    padding: 10px;
    font-size: 0.8em; 
  }
  
  .hero-section h1 {
    font-size: 2em; 
  }
  
  .hero-section p {
    font-size: 0.9em; 
  }
  
  button.learn-more {
    padding: 10px 20px;
    font-size: 0.9em;
  }

  .best-sellers h2 {
    font-size: 1.8em; 
  }
  
  .product-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
  }
  
  .product-item {
    width: 100%; 
    padding: 10px;
  }
  
  .product-item img {
    height: auto; 
  }
}
</style>