<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" cross origin>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet">
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
          <router-link to="/reachUs" class="navButtons">Reach Us</router-link>
          <router-link to="/admin" class="navButtons">Admin</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

nav {
  background-color: #1B1717 !important; 
  font-family: "JetBrains Mono", monospace;
  font-optical-sizing: auto;
  font-style: normal;
}

.navImage {
  height: 60px;
  width: 60px;
}

.navbar-nav {
  display: flex;
  justify-content: center; 
  width: 100%;
}

.navButtons {
  margin: 0 15px; 
  color: #EEEBDD; 
  text-decoration: none;
  font-size: 18px; 
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid #00bcd4; 
}
</style>
