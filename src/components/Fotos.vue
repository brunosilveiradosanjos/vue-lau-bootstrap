<template>
  <!-- Start Portfolio Section -->
  <div id="fotos" class="offset">
    <div class="m-5">
      <div class="row">
        <div id="activeTest" class="col-12">
          <h3 class="heading">Fotos</h3>
          <div class="heading-underline"></div>
        </div>
      </div>
      <div class="col-sm-6 col-md-3 p-0"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          icon: "fa fa-play-circle",
          // link: require("@/img/portfolio/8.jpg"),
          fade: "animate__fadeInLeft",
          name: "Meu Baião",
          text:
            "Tem como base o Baião, ritmo nordestino difundido principalmente pelo pernambucano Luiz Gonzaga. Esta música apresenta uma variação em ritmo de choro e leva esse nome devido a influência de Lau pela música nordestina e pelo choro paulistano de grandes nomes, tais como: Adoniran Barbosa e Demônios da garoa.",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>

 