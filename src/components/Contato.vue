<template>
  <div>
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

                <ul class="social pt-3">
                  <li v-for="(item,index) in media" :key="index">
                    <a :href="item.link" target="_blank">
                      <i
                        :class="item.icon"
                        :id="index"
                        :ref="index"
                        @mouseover="handleHoverOn(item.color,index)"
                        @mouseleave="handleHoverOff(index)"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- :style="{'color':iconHover}" -->
              <!-- Contato -->
              <div class="col-md-7 px-0 pl-md-3">
                <h3>Contato</h3>
                <form id="contact-form">
                  <div class="messages"></div>
                  <div class="controls">
                    <div class="form-group">
                      <input
                        type="text"
                        id="form_name"
                        class="form-control"
                        name="name"
                        required="required"
                        placeholder="Nome"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        id="form_email"
                        class="form-control"
                        name="email"
                        required="required"
                        placeholder="e-mail"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="message"
                        id="form_message"
                        cols="30"
                        rows="4"
                        required="required"
                        placeholder="Deixe sua mensagem aqui"
                      ></textarea>
                    </div>

                    <button type="button" class="btn btn-outline-light" @click="submit">Enviar</button>
                  </div>
                  <!-- end controls -->
                </form>
                <!-- end form -->
              </div>
              <!-- end row  -->
            </div>
            <!-- end row  -->
          </div>
          <!-- end container -->
          <hr class="socket" />&copy;Nuno Theme
        </div>
        <!-- end row outer  -->
      </div>
      <!-- end container fluid  -->
    </div>
    <a
      v-if="show"
      class="animate__animated animate__bounceInRight top-scroll"
      href="#home"
      @scroll="handleScroll"
    >
      <i class="fa fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleHoverOff(index) {
      console.log(index);
      this.$refs[index][0].style.color = "#fff";
    },
    handleHoverOn(color, index) {
      this.$refs[index][0].style.color = color;
    },
    handleScroll() {
      if (window.scrollY >= 1000) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    submit() {
      console.log("submit");
    }
  },
  data() {
    return {
      show: false,
      iconHover: "FFFF",
      media: [
        {
          icon: "fab fa-instagram-square",
          link: "https://www.instagram.com/lau_marques_anjos/",
          color: "#8a3ab9"
        },
        {
          icon: "fa fa-facebook-official",
          link: "https://www.facebook.com/laudisvan.marques",
          color: "#3b5998"
        },
        {
          icon: "fa fa-youtube-play",
          link: "https://www.youtube.com/channel/UCzv_NsMinL7ih8x9oub1zqg",
          color: "#c4302b"
        },
        {
          icon: "fa fa-linkedin",
          link: "https://www.linkedin.com/in/laudisvan-anjos-78467524/",
          color: "#0e76a8"
        },
        {
          icon: "fab fa-spotify",
          link:
            "https://open.spotify.com/artist/2YxGOxtuuIiq5EgXVSHjMX?si=SUtbYAJTSyCV_mtPO6DT2g",
          color: "#81b71a"
        }
      ]
    };
  }
};
</script>