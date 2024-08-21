<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <!-- Logo as a "Back to Home" button -->
      <router-link class="navbar-brand" to="/">
        <img src="https://asheekasamuels.github.io/All-Images/images/AElogo.png" loading="lazy" alt="logo" class="navImage">
      </router-link>
      
      <!-- Navbar toggler for mobile view -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Navbar links -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
          <router-link to="/" class="navButtons">Home</router-link>
          <router-link to="/about" class="navButtons">About</router-link>
          <router-link to="/products" class="navButtons">Products</router-link>
          <router-link to="/admin" class="navButtons">Admin</router-link>
          <router-link to="/reachUs" class="navButtons">Reach Us</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* General Navbar Styles */
nav {
  background-color: #1B1717 !important; /* Dark background */
  margin-bottom: 20px;
}

/* Logo Styling */
.navImage {
  height: 60px;
  width: 60px;
}

/* Navbar Nav Alignment */
.navbar-nav {
  display: flex;
  justify-content: center; /* Center the nav links */
  width: 100%;
}

/* Nav Buttons Styling */
.navButtons {
  margin: 0 15px; /* Space out the nav links */
  color: #EEEBDD; /* Link color */
  text-decoration: none; /* Remove underline from links */
  font-size: 16px; /* Font size for links */
}

/* Active Link Styling */
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid #CE1212; /* Active link underline */
}
</style>
