<template>
  <div id="home" class="offset">
    <div class="landing">
      <div class="home-wrap">
        <div class="home-inner"></div>
      </div>
    </div>
    <div class="caption text-center text-light text-uppercase">
      <h1 class="font-weight-bold animate__animated animate__bounceInUp animate__delay-1s">
        Lau Marques
        <span class="text-nuno">Anjos</span>
      </h1>
      <h4
        class="animate__animated animate__bounceInUp animate__delay-2s"
      >Professor, arranjador e instrumentista</h4>
      <a
        href="#contato"
        class="btn btn-outline-light btn-lg animate__animated animate__bounceInUp animate__delay-3s"
      >Contato</a>
    </div>
    <a href="#sobre" class="down-arrow text-center" @scroll="handleScroll">
      <div class="arrow d-none d-md-block">
        <i class="fas fa-angle-down" :style="{'opacity' :this.opacity }"></i>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  created() {
    // listem scroll event
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      opacity: 1
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.opacity = Math.round((1 / window.scrollY) * 10000) / 100;
      }
      if (this.opacity > 0.7) {
        this.opacity = 0.7;
      } else if (this.opacity <= 0.2) {
        this.opacity = 0;
      }
    }
  }
};
</script>