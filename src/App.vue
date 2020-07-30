<template>
  <div id="app">
    <appNav />
    <appHome />
    <appSobre :active="active" />
    <appMusicas />
    <appFotos />
    <appContato />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Musicas from "./components/Musicas";
import Fotos from "./components/Fotos";
import Contato from "./components/Contato";

export default {
  name: "App",
  components: {
    appNav: Nav,
    appHome: Home,
    appSobre: Sobre,
    appMusicas: Musicas,
    appFotos: Fotos,
    appContato: Contato,
  },
  created() {
    // listem scroll event
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const STelement = document.querySelector(".sobreTitleAnimation");
      const mTitle = document.querySelector(".musicasTitleAnimation");
      const cTxt1 = document.querySelector(".contatoTxt1Animation");

      // Sobre fade class animations
      if (
        window.scrollY * 11 >
        STelement.getBoundingClientRect().top + window.scrollY
      ) {
        STelement.style.setProperty("--animate-duration", "1.5s");
        STelement.classList.add(
          "animate__delay-1s",
          "animate__animated",
          "animate__fadeInUp"
        );

        const SIelement = document.querySelector(".sobreImgAnimation");
        SIelement.style.setProperty("--animate-duration", "2.5s");
        SIelement.classList.add(
          "animate__delay-2s",
          "animate__animated",
          "animate__fadeInLeft"
        );

        const STxtelement = document.querySelector(".sobreTxtAnimation");
        STxtelement.style.setProperty("--animate-duration", "3s");
        STxtelement.classList.add(
          "animate__delay-3s",
          "animate__animated",
          "animate__fadeInRight"
        );
      }

      // Músicas fade class animations
      if (
        window.scrollY * 1.5 >
        mTitle.getBoundingClientRect().top + window.scrollY
      ) {
        mTitle.style.setProperty("--animate-duration", "1.5s");
        mTitle.classList.add(
          "animate__delay-1s",
          "animate__animated",
          "animate__fadeInUp"
        );

        const mTxt1 = document.querySelector(".musicasTxt1Animation");
        mTxt1.style.setProperty("--animate-duration", "1.5s");
        mTxt1.classList.add(
          "animate__delay-2s",
          "animate__animated",
          "animate__fadeInLeft"
        );

        const mTxt2 = document.querySelector(".musicasTxt2Animation");
        mTxt2.style.setProperty("--animate-duration", "1.5s");
        mTxt2.classList.add(
          "animate__delay-3s",
          "animate__animated",
          "animate__fadeInUp"
        );

        const mTxt3 = document.querySelector(".musicasTxt3Animation");
        mTxt3.style.setProperty("--animate-duration", "1.5s");
        mTxt3.classList.add(
          "animate__delay-4s",
          "animate__animated",
          "animate__fadeInRight"
        );
      }

      // Contato fade class animations
      if (
        window.scrollY * 1.3 >
        cTxt1.getBoundingClientRect().top + window.scrollY
      ) {
        cTxt1.style.setProperty("--animate-duration", "1.5s");
        cTxt1.classList.add(
          "animate__delay-1s",
          "animate__animated",
          "animate__fadeInLeft"
        );

        const cTxt2 = document.querySelector(".contatoTxt2Animation");
        cTxt2.style.setProperty("--animate-duration", "2.5s");
        cTxt2.classList.add(
          "animate__delay-2s",
          "animate__animated",
          "animate__fadeInRight"
        );
      }
    },
  },
  data() {
    return {
      active: "#home",
    };
  },
};
</script>
