<template>
  <div id="sobre" class="offset">
    <div class="m-5">
      <div class="row">
        <!-- Sobre -->
        <div class="col-12 sobreTitleAnimation">
          <h3 class="heading">Sobre Mim</h3>
          <div class="heading-underline"></div>
        </div>
        <div class="col-12 px-xl-5">
          <div class="row sobre px-3 px-md-4">
            <!-- image -->
            <div class="col-lg-5 my-auto sobreImgAnimation">
              <img src="@/../public/img/image2.jpg" />
            </div>
            <!-- text -->
            <div class="col-lg-7 my-auto sobreTxtAnimation">
              <blockquote class="text-justify">{{text}}</blockquote>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:
        "A música sempre esteve presente na vida de Lau. Quando criança foi incentivado pelo pai, que estudou música na adolescência, a ouvir e aprender a diferenciar os sons dos instrumentos. Aos 14 anos, iniciou seus estudos como autodidata. Mais tarde, aos 17, estudou violão e guitarra na escola do violonista e concertista Marcelo Fernandes. Ao longo dos anos seu interesse e paixão pela música se intensificou ainda mais, conduzindo a sua narrativa a uma trilha sonora. Com 20 anos entrou no curso de Jazz e MPB na Groove Escola de Música, onde estudou com os professores Peter Farrel e Levi Ferreira de Miranda, grandes influenciadores da sua trajetória musical. Nessa época, pensando em não influenciar as suas escolhas, foi surpreendido com uma revelação da sua mãe: quando ela ainda o carregava no ventre, sonhou que o filho seria músico. Por coincidência ou predestinação, Lau encontrou na                  a sua vocação. Em 2009 fez aula particular com o professor de flauta Daniel (atual flautista de Jazz Sinfônica de São Paulo). Em 2012 cursou improvisação no Coursera, com o vibrafonista Gary Burton. Trabalhou como Professor de Canto, Violão, Flauta Transversal e Sax, transitando por várias escolas de música de São Paulo, como: Arte São Paulo, Aqui Jazz, Linha de passe, Escola da Granja, entre outras. Na Biblioteca Nacional fez transcrições inscritas para diversos compositores. Fez arranjados para bandas de metais, grupos vocais e pequenas orquestras, como a da AD Villa Elida. Em março de 2018 lançou seu primeiro álbum chamado “Essencial Lado A”, atuando como produtor, compositor e intérprete, em parceria com o percussionista Tustão Cunha. Lançou no início desse ano seu segundo EP “Essencial Lado B”, que traz um tema instrumental, uma peça para violão e três músicas cantadas.",
    };
  },
};
</script>


<style scoped>
.sobre img {
  border-radius: 50%;
  transition: transform 0.3s ease;
  max-width: 90%;
  margin: 0 auto;
  display: block;
}
.sobre img:hover {
  transform: scale(0.95);
}
</style>