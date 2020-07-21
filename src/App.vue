<template>
  <div id="app">
    <appNav />
    <appHome />
    <appSobre />
    <appMusicas />
    <appTrabalhos />
    <appContato />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Musicas from "./components/Musicas";
import Trabalhos from "./components/Trabalhos";
import Contato from "./components/Contato";

export default {
  name: "App",
  components: {
    appNav: Nav,
    appHome: Home,
    appSobre: Sobre,
    appMusicas: Musicas,
    appTrabalhos: Trabalhos,
    appContato: Contato
  }
};
</script>
