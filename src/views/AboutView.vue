<template>
  <div class="about-page">
    <h2 class="page-title">About Us</h2>
    <div class="content-container">
      <div class="image-section">
        <img 
          src="https://asheekasamuels.github.io/All-Images/images/Asheeka1.jpg" 
          loading="lazy" 
          alt="Asheeka Samuels" 
          class="founder-image"
        />
        <p>Asheeka Samuels</p>
        <img 
          src="https://asheekasamuels.github.io/All-Images/images/Elvin-body.jpg" 
          loading="lazy" 
          alt="Elvin Harris" 
          class="founder-image"
        />
        <p>Elvin Harris</p>
      </div>
      <div class="info-section">
        <div class="info-box">
          <h3 class="info-title">Our Story</h3>
          <p class="info-text">
            At A&E Electronics, we are driven by a fascination with cutting-edge
            technology. Founded by Asheeka Samuels and Elvin Harris, our company
            was born from a deep passion for electronics. We offer a
            thoughtfully designed range of state-of-the-art gadgets that elevate
            your digital experience. We’re committed to engineering the future
            of technology, one device at a time.
          </p>
        </div>
        <div class="info-box">
          <h3 class="info-title">Our Team</h3>
          <p class="info-text">
            Our team at A&E Electronics is united by a shared passion for
            technology and a commitment to advancing electronic innovations. We
            foster a collaborative environment that values creativity and
            precision. Each team member contributes their expertise, blending
            innovation with excellence to deliver cutting-edge solutions that
            transform lives.
          </p>
        </div>
        <div class="info-box">
          <h3 class="info-title">Our Mission</h3>
          <p class="info-text">
            Our mission at A&E Electronics is to revolutionize how you
            experience technology. We aim to be the leading destination for
            groundbreaking electronics, where innovation meets everyday
            convenience. We strive to inspire and elevate expectations with each
            product, ensuring every encounter with our technology leaves you
            amazed and delighted.
          </p>
        </div>
        <router-link to="/products">
          <button class="view-products-btn">View All Products</button>
        </router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-page {
  background: linear-gradient(135deg, #1f1f1f, #0d0d0d);
  color: #fff;
  font-family: "Roboto", sans-serif;
  padding: 20px;
  min-height: 100vh;
}

.page-title {
  font-size: 2.5em;
  color: #00bcd4;
  text-align: center;
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.image-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.founder-image {
  width: 350px; 
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
}

.info-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 188, 212, 0.3);
}

.info-title {
  font-size: 1.5em;
  color: #00bcd4;
  margin-bottom: 15px;
}

.info-text {
  font-size: 1.1em;
  color: #e0e0e0;
  line-height: 1.6;
}

.view-products-btn {
  background: #00bcd4;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 40px auto;
}

.view-products-btn:hover {
  background: #03a9f4;
  transform: scale(1.05);
}

.view-products-btn:active {
  background: #0288d1;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .founder-image {
    width: 100px; /* Adjust image width for smaller screens */
  }
}
</style>
