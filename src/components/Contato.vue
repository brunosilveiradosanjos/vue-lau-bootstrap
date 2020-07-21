<template>
  <div id="contato" class="offset">
    <div class="footer"></div>
    <div class="container-fluid footer px-0">
      <div class="row outer">
        <div class="container">
          <div class="row py-3">
            <div class="col-md-5 px-0 pr-md-3">
              <img src="../assets/logo.png" />
              <p>
                Será um prazer te ajudar a realizar o sonho de tocar um
                instrumento e aprender teoria e história da música,
                seja por lazer ou profissionalmente. Para isso deixe uma mensagem
                e minha equipe entrará em contato para havaliarmos as condições das
                das aulas.
              </p>
              <strong>Localização</strong>
              <p>Osasco</p>
              <br />
              <strong>Informações para contato</strong>
              <p>(11) 97130-7174</p>
              <p>laumarquesanjos@gmail.com</p>
              <ul class="social">
                <li v-for="(item,index) in media" :key="index">
                  <a :href="item.link">
                    <i :class="item.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      media: [
        {
          icon: "fab fa-facebook-square",
          link: "https://www.facebook.com/laudisvan.marques"
        },
        {
          icon: "fab fa-instagram-square",
          link: "https://www.facebook.com/laudisvan.marques"
        },
        {
          icon: "fab fa-youtube-square",
          link: "https://www.facebook.com/laudisvan.marques"
        },
        {
          icon: "fab fa-linkedin",
          link: "https://www.facebook.com/laudisvan.marques"
        }
      ]
    };
  }
};
</script>