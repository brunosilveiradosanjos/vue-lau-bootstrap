<template>
  <div id="app">
    <appNav />
    <appHome />
    <appSobre />
    <appMusicas />
    <appBanda />
    <appContato />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Musicas from "./components/Musicas";
import Banda from "./components/Banda";
import Contato from "./components/Contato";

export default {
  name: "App",
  components: {
    appNav: Nav,
    appHome: Home,
    appSobre: Sobre,
    appMusicas: Musicas,
    appBanda: Banda,
    appContato: Contato
  }
};
</script>
