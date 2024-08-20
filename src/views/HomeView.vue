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
        <div class="product-item">
          <img src="https://via.placeholder.com/200" alt="Product 1">
          <h3>Product 1</h3>
          <p>$199.99</p>
        </div>
        <div class="product-item">
          <img src="https://via.placeholder.com/200" alt="Product 2">
          <h3>Product 2</h3>
          <p>$299.99</p>
        </div>
        <div class="product-item">
          <img src="https://via.placeholder.com/200" alt="Product 3">
          <h3>Product 3</h3>
          <p>$399.99</p>
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

.landing-page {
  font-family: 'Roboto', sans-serif;
  color: #fff;
}

.hero-section {
  background: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 20px;
}

.hero-content {
  max-width: 800px;
}

h1 {
  font-size: 3em;
  color: #00bcd4;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
}

button.learn-more {
  background: #00bcd4;
  color: white;
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

.best-sellers {
  background: #1f1f1f;
  padding: 40px 20px;
  text-align: center;
}

.best-sellers h2 {
  font-size: 2.5em;
  color: #00bcd4;
  margin-bottom: 30px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
  text-align: center;
  padding: 15px;
  width: 250px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-item:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 188, 212, 0.5);
}

.product-item img {
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
}

.product-item h3 {
  font-size: 1.5em;
  color: #00bcd4;
  margin: 10px 0;
}

.product-item p {
  font-size: 1.2em;
  color: #fff;
}
</style>
