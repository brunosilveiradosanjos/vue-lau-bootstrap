<template>
  <!-- bg-dark -->
  <!-- navbar-dark -->
  <nav
    id="nav"
    class="navbar navbar-expand-md fixed-top offset"
    :class="{ 'solid': solid  , 'solid-toggle': solidToggle}"
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
      >
        <span class="custom-toggler-icon">
          <i ref="toggleButton" id="toggleButton" class="fas fa-bars"></i>
        </span>
      </button>
      <!-- Menu list in greater than 768px -->
      <div
        class="collapse navbar-collapse"
        :class="{'show':show}"
        id="navbarResponsive"
        ref="navbarResponsive"
      >
        <ul class="navbar-nav ml-auto">
          <!-- <button @click="smooth('#home')">teste</button> -->
          <li class="nav-item" v-for="(item,index) in navItens" :key="index">
            <a class="nav-link" id="navLink" ref="navLink" :href="item.page">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    // listem scroll event
    window.addEventListener("scroll", this.handleScroll);
    // listem click event
    document.addEventListener("click", this.handleNavbarToggler);
  },
  destroyed() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleNavbarToggler);
  },
  methods: {
    smooth(x) {
      console.log(x);
      document.querySelector(x).scrollIntoView({ behavior: "smooth" });
    },
    // Navbar solid transition rule
    handleScroll() {
      if (window.scrollY < 300) {
        this.solid = false;
      } else {
        this.solid = true;
      }
    },
    handleNavbarToggler(evt) {
      // Navbar solid-toggle transition rule
      if (evt.target.id == "toggleButton") {
        if (this.solidToggle) {
          setTimeout(() => {
            this.solidToggle = !this.solidToggle;
          }, 300);
        } else {
          this.solidToggle = !this.solidToggle;
        }
      }
      // Navbar close menu on click
      if (evt.target.id == "navLink") {
        this.$refs.navbarResponsive.classList.remove("show");
        this.solidToggle = false;
      }
    }
  },
  data() {
    return {
      solid: false,
      solidToggle: false,
      show: false,
      navItens: [
        { title: "Home", page: "#home" },
        { title: "Sobre", page: "#sobre" },
        { title: "Músicas", page: "#musicas" },
        { title: "Banda", page: "#banda" },
        { title: "Contato", page: "#contato" }
      ]
    };
  }
};
</script>