<template>
  <div class="container-fluid">
    <div class="row">
      <p class="lead">
        Made by Asheeka Samuels & Elvin Harris &copy; {{ currentYear }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
div {
  background-color: #1B1717 !important; 
  color: white;
  font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-style: normal;
}

</style>
