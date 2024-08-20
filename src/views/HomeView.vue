<template>
  <div class="landing-page">
    <div class="content">
      <h1>Welcome To A&E Electronics!</h1>
      <p>Your one-stop shop for the latest in cutting-edge technology and innovative electronic solutions.</p>
      <p>At A&E Electronics, we are dedicated to providing top-quality products and exceptional customer service. Explore our diverse range of electronics designed to enhance your digital experience and stay ahead of the tech curve.</p>
      <p>Thank you for choosing A&E Electronics. We're excited to help you find the perfect tech solutions!</p>
      <router-link to="/about">
        <button class="learn-more">Learn More</button>
      </router-link>
    </div>
    
    <div class="recently-viewed">
      <h2>Best Sellers</h2>
      <div class="product-list">
        <div class="product-item">
          <img src="path-to-image1.jpg" alt="Product 1">
          <h3>Product 1</h3>
          <p>$199.99</p>
        </div>
        <div class="product-item">
          <img src="path-to-image2.jpg" alt="Product 2">
          <h3>Product 2</h3>
          <p>$299.99</p>
        </div>
        <div class="product-item">
          <img src="path-to-image3.jpg" alt="Product 3">
          <h3>Product 3</h3>
          <p>$399.99</p>
        </div>
      </div>
    </div>
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

/* Landing page styling */
.landing-page {
  background: linear-gradient(135deg, #1f1f1f, #0d0d0d);
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.content {
  text-align: center;
  max-width: 800px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1); 
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5em;
  color: #00bcd4; 
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 15px;
}

button.learn-more {
  background: #00bcd4; 
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

button.learn-more:hover {
  background: #03a9f4; 
  transform: scale(1.05);
}

button.learn-more:active {
  background: #0288d1; 
}

.recently-viewed {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background: rgba(41, 32, 32, 0.1); 
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.recently-viewed h2 {
  font-size: 2em;
  color: #00bcd4;
  margin-bottom: 20px;
  text-align: center;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-item {
  background: rgba(255, 255, 255, 0.2); 
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  text-align: center;
  padding: 10px;
  width: 200px;
}

.product-item img {
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-item h3 {
  font-size: 1.2em;
  color: #00bcd4; 
  margin: 10px 0;
}

.product-item p {
  font-size: 1.1em;
  color: #e0e0e0;
}
</style>
