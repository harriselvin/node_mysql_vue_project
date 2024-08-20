<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="https://asheekasamuels.github.io/All-Images/images/AElogo.png" loading="lazy" alt="logo" class="navImage">
        </router-link>
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto mb-2 mb-lg-0">
            <router-link to="/" class="navButtons">Home</router-link>
            <router-link to="/about" class="navButtons">About</router-link>
            <router-link to="/products" class="navButtons">Products</router-link>
            <router-link to="/admin" class="navButtons">Admin</router-link>
            <router-link to="/reachUs" class="navButtons">ReachUs</router-link>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background-color: #1B1717 !important;
    margin-bottom: 20px;
  }
  
  .navImage {
    height: 60px;
    width: 60px;
  }
  
  .navbar-nav {
    display: flex;
    flex-direction: row;
  }
  
  .navbar-nav .navButtons {
    margin-left: 20px;
    color: #EEEBDD;
  }
  
  a {
    text-decoration: none;
  }
  
  nav a.router-link-exact-active {
    border-bottom: 2px solid #CE1212;
  }
  </style>
  