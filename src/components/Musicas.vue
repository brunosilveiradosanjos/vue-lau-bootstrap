<template>
  <div id="musicas">
    <!-- Start Fixed BG IMG Dark -->
    <div class="fixed">
      <div class="row dark text-light text-center">
        <div class="col-12 animate__animated animate__fadeInUp">
          <h3 class="heading">Músicas</h3>
          <div class="heading-underline"></div>
        </div>

        <div
          v-for="(info,index) in data"
          :key="index"
          class="col-md-4 animate__animated"
          :class="info.fade"
        >
          <h3>{{info.name}}</h3>
          <div class="feature py-2">
            <a :href="info.link" target="_blank" class="fa-layers fa-3x">
              <i :class="info.icon"></i>
            </a>
          </div>
          <p class="lead text-justify px-2 mx-2">{{info.text}}</p>
        </div>
      </div>
      <!-- End Row Dark -->

      <div class="fixed-wrap">
        <div class="fixed-dark"></div>
      </div>
    </div>
    <!-- End Fixed BG IMG Dark -->
  </div>
  <!-- End of Features Section -->
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          icon: "fa fa-play-circle",
          link:
            "https://open.spotify.com/track/48lDbkBnI64vcvaD7GRQiZ?si=oDHV95YlR2OzQCuQAi_kdA",
          fade: "animate__fadeInLeft",
          name: "Meu Baião",
          text:
            "Tem como base o Baião, ritmo nordestino difundido principalmente pelo pernambucano Luiz Gonzaga. Esta música apresenta uma variação em ritmo de choro e leva esse nome devido a influência de Lau pela música nordestina e pelo choro paulistano de grandes nomes, tais como: Adoniran Barbosa e Demônios da garoa.",
        },
        {
          icon: "fa fa-play",
          link:
            "https://open.spotify.com/track/6TB1ZyyYKGqKnqy5NLROXa?si=3W59YDVzRaKPnnbbiW_aGg",
          fade: "animate__fadeInUp",
          name: "Azulão",
          text:
            'Tema composto pelo seu amigo Tustão Cunha. Inicialmente seria no ritmo de Capoeira, mas ao tocá-lo Lau sentiu o ritmo parecido com o da "Banda de pífano de Caruaru", que trabalha somente com percussão e pífanos, de sonoridade muito peculiar. Então, Lau montou o arranjo para duas flautas e a gravou com um pífano original de Caruaru, presente dado a ele pela sua irmã Lilian.',
        },
        {
          icon: "fa fa-play-circle-o",
          link:
            "https://open.spotify.com/track/49hGREqWJczh80xIrXcP2H?si=NzRoM9czQlOYfkqigw9KiA",
          fade: "animate__fadeInRight",
          name: "Maracá-yo",
          text:
            'O início desta música tem um ritmo parecido com o Maracatu. Surgindo daí a ideia de brincar com o nome dela: Maraca-eu e Maraca-tu. Como a segunda parte da música possui uma levada latina foi batizada como Maracá-yo, que em espanhol significa "eu".',
        },
      ],
    };
  },
};
</script>

<style scoped>
.feature a {
  color: #1ebba3;
  margin-bottom: 0.6rem;
}
.feature h3 {
  text-transform: uppercase;
  font-size: 1.3rem;
  padding-bottom: 0.4rem;
}

.fixed {
  position: relative;
  width: 100%;
}
.fixed-wrap {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -9999;
}
.fixed-dark {
  background-image: url("../../public/img/image4.jpeg");
  position: fixed;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform;
  z-index: -1;
  top: 0;
  left: 0;
  display: table;
}
.dark {
  background-color: rgba(0, 0, 0, 0.75);
  padding: 4rem 0;
  z-index: 1000;
}
</style>