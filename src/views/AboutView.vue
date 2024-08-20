<template>
  <div class="container-fluid3">
    <div class="about-page">
      <h2 class="display-2">About</h2>
      <div class="container3">
        <div class="box" id="box1">
          <h3 id="head3">Our Story:</h3>
          <p id="p2">
            Unveil the innovation behind A&E Electronics. Fueled by a
            fascination with cutting-edge technology, our founders, Asheeka
            Samuels & Elvin Harris, transformed a deep-seated passion for
            electronics into a pioneering tech company. Explore our thoughtfully
            designed range of state-of-the-art gadgets and elevate your digital
            experience. Engineering the future of technology, one device at a
            time.
          </p>
        </div>
        <div class="box" id="box1">
          <h3 id="head3">Our Team:</h3>
          <p id="p2">
            At A&E Electronics, our team is a closely-knit group bound by a
            shared passion for technology and a commitment to pushing the
            boundaries of electronic advancements. We cultivate an environment
            of creativity, collaboration, and precision. Each member brings
            their own expertise, weaving together a rich tapestry of innovation
            and excellence. United, we are dedicated to delivering cutting-edge
            electronic solutions that embody the spirit of A&E Electronics. We
            believe every device has the potential to transform lives, and we're
            committed to helping you unlock that potential.
          </p>
        </div>
        <div class="box" id="box1">
          <h3 id="head3">Our Mission:</h3>
          <p id="p2">
            At A&E Electronics, our mission is to revolutionize the way
            you experience technology. We strive to create a world where every
            interaction with our products sparks excitement and elevates your
            digital journey. Our vision is to be the leading destination for
            groundbreaking electronics, where innovation meets everyday
            convenience. We aim to inspire awe and elevate expectations with
            every device, ensuring that each encounter with our technology
            leaves you amazed and delighted.
          </p>
        </div>
      </div>
      <router-link to="/products">
        <button class="View-All-Products">View All Products</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
};
</script>

<style scoped>
/* ABOUT PAGE */
.container-fluid3 { 
    background: linear-gradient(135deg, #1f1f1f, #0d0d0d);
    background-size: cover;
    background-position: center;
    border-image: fill 0 linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
    color: black;

}

.container3 {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    justify-content: space-evenly;
    align-items: center;
    width: 250px auto;
}

.display-2 {
  font-size: 2.5em;
  color: #00bcd4; /* Neon blue */
  margin-bottom: 20px;
  text-align: center;
}

.box {
  background: rgba(255, 255, 255, 0.1); /* Slightly opaque background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

#head3 {
  font-size: 1.5em;
  color: #00bcd4; /* Neon blue */
  margin-bottom: 10px;
}

#p2 {
  font-size: 1.1em;
  color: whitesmoke;
}

.recent-products {
  margin-top: 40px;
}

.recent-products h2 {
  font-size: 2em;
  color: #00bcd4; /* Neon blue */
  text-align: center;
  margin-bottom: 20px;
}

#box1 {
    margin-top: 25px;
    width: 300px;
    background: rgba(41, 32, 32, 0.1); /* Slightly opaque background */
    color: black;
    box-shadow: 0 0 20px 0  #00bcd4 ;
    border-radius: 15px;
    padding: 10px;
    text-decoration: none;
    height: 450px auto;
}
#head3 {
    text-align: center;
    padding-top: 50px;
}

.View-All-Products {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1); /* Slightly opaque background */
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
    font-size: 1em;
    color: #00bcd4; /* Neon blue */
    margin-bottom: 20px;
    text-align: center;
  }

@media (max-width: 991.98px) {
    .container3 {
        max-width: 600px; /* Adjust max-width as needed */
    }

    #box1 {
        width: 100%; /* Adjust box width for smaller screens */
    }
}

/* end of about page */
</style>
