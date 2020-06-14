<template>
  <div id="app">
    <Navbar />
    <div class="content-wrap">
      <router-view />
    </div>
    <footer id="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style></style>
