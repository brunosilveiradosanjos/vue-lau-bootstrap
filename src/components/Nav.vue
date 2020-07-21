<template>
  <!-- bg-dark -->
  <!-- navbar-dark -->
  <nav
    id="nav"
    class="navbar navbar-expand-md fixed-top"
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
          <i class="fas fa-bars"></i>
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
    document.addEventListener("click", this.handleNavbarToggler);
    document.addEventListener("click", this.handleNavbarClose);
  },
  destroyed() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("click", this.handleNavbarToggler);
    document.addEventListener("click", this.handleNavbarClose);
  },
  methods: {
    // Navbar solid transition rule
    handleScroll() {
      // console.log(evt.target.scrollingElement.scrollTop);
      if (window.scrollY < 300) {
        this.solid = false;
      } else {
        this.solid = true;
      }
    },
    // Navbar solid-toggle transition rule
    handleNavbarToggler(evt) {
      // console.log(evt.target.className);
      if (evt.target.className == "fas fa-bars" && window.scrollY < 300) {
        this.solidToggle = !this.solidToggle;
      }
      console.log("solidToggle  " + this.solidToggle);
    },
    // Navbar close menu on click
    handleNavbarClose(evt) {
      console.log(this.$refs);
      evt.target.classList.forEach(element => {
        if (element == "nav-link") {
          evt.preventDefault();
          this.$refs.navbarResponsive.classList.remove("show");
        } else {
          this.show = true;
        }
      });
    }
    // Navbar Smooth scroll to link
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
        { title: "Trabalhos", page: "#trabalhos" },
        { title: "Contato", page: "#contato" }
      ]
    };
  }
};
</script>