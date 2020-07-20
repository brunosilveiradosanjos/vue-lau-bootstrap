<template>
  <!-- bg-dark -->
  <!-- navbar-dark -->
  <nav
    class="navbar navbar-expand-md fixed-top"
    :class="{ 'solid': solid  }"
    @scroll="handleScroll"
  >
    <div class="container-fluid">
      <a href="#home" class="navbar-brand">
        <img src="../assets/logo.png" />
      </a>
      <!-- Toggle button in thiner 768px -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        @click="navbarToggler = !navbarToggler"
      >
        {{
        this.navbarToggler}}
        <span class="custom-toggler-icon">
          <i class="fas fa-bars"></i>
        </span>
      </button>
      <!-- Menu list in greater than 768px -->
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="(item,index) in navItens" :key="index">
            <a :href="item.page" class="nav-link">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // listem the scroll event
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // Navbar solid transition rule
    handleScroll() {
      if (this.navbarToggler) {
        this.solid = true;
      } else if (window.scrollY < 300) {
        this.solid = false;
      } else if (window.scrollY >= 300) {
        this.solid = true;
      }
      console.log(window.scrollY);
    }
  },
  data() {
    return {
      solid: false,
      navbarToggler: false,
      navItens: [
        { title: "Home", page: "#home" },
        { title: "Sobre", page: "#sobre" },
        { title: "Músicas", page: "#musicas" },
        { title: "Trabalhos", page: "#trabalhos" },
        { title: "Contato", page: "#contato" }
      ]
    };
  }
};
</script>