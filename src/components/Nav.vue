<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">
      <!-- <img src="../assets/logo.png" /> -->
    </a>
    <!-- Toggle button in thiner 768px -->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      @click="dataToggle"
      data-target="#navbarResponsive"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Menu list in greater than 768px -->
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="(item,index) in navItens" :key="index">
          <a :href="item.page" class="nav-link">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    dataToggle() {
      console.log(this.collapse);
    }
  },
  data() {
    return {
      collapse: true,
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