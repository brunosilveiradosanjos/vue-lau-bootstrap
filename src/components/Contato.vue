<template>
  <div>
    <div id="contato" class="offset">
      <div class="footer"></div>
      <div class="container-fluid footer px-0">
        <div class="row outer">
          <div class="container">
            <div class="row py-3">
              <div class="col-md-5 px-0 pr-md-3 contatoTxt1Animation">
                <img src="../assets/logo.png" />
                <p>
                  Será um prazer te ajudar a realizar o sonho de tocar um
                  instrumento e aprender teoria e história da música,
                  seja por lazer ou profissionalmente. Para isso deixe uma mensagem
                  e minha equipe entrará em contato.
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
              <!-- Contato -->
              <div class="col-md-7 px-0 pl-md-3 contatoTxt2Animation">
                <h3>Contato</h3>
                <form id="contact-form">
                  <div class="messages"></div>
                  <!-- <pre>{{$v.userData.name}}</pre> -->
                  <div class="controls">
                    <!-- name  -->
                    <div
                      class="form-group"
                      :class="{ 'form-group--error': $v.userData.name.$error }"
                    >
                      <input
                        type="text"
                        id="form_name"
                        class="form-control"
                        name="name"
                        required="required"
                        placeholder="Nome"
                        v-model.trim="$v.userData.name.$model"
                      />
                      <div class="error" v-if="$v.userData.name.error">Campo obrigatório.</div>
                      <div
                        class="error"
                        v-if="!$v.userData.name.minLength"
                      >Nome precisa ter no mínimo {{$v.userData.name.$params.minLength.min}} caracteres.</div>
                      <div
                        class="error"
                        v-if="!$v.userData.name.maxLength"
                      >Nome precisa ter no máximo {{$v.userData.name.$params.maxLength.max}} caracteres.</div>
                    </div>
                    <!-- email -->
                    <div class="form-group">
                      <input
                        type="email"
                        id="form_email"
                        class="form-control"
                        name="email"
                        required="required"
                        placeholder="e-mail"
                        v-model.trim="$v.userData.email.$model"
                      />
                      <div class="error" v-if="!$v.userData.email.email">E-mail inválido.</div>
                      <div class="error" v-if="$v.userData.email.error">E-mail obrigatório.</div>
                    </div>
                    <!-- message  -->
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="message"
                        id="form_message"
                        cols="30"
                        rows="4"
                        required="required"
                        placeholder="Deixe sua mensagem aqui"
                        v-model.trim="$v.userData.message.$model"
                      ></textarea>
                      <div
                        class="error"
                        v-if="!$v.userData.message.maxLength"
                      >Mensagem pode ter no máximo {{$v.userData.message.$params.maxLength.max}} caracteres.</div>
                    </div>

                    <button
                      type="button"
                      class="btn btn-outline-light"
                      @click.prevent="submit"
                    >Enviar</button>
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
          <hr class="socket" />
          {{ new Date().getFullYear() }} — &copy;Marques Anjos
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
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";

export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleHoverOff(index) {
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
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
          this.$http.post(
            "https://vuejs-http-1f05a.firebaseio.com/data.json",
            this.userData
          );
          this.userData = "";
        }, 500);
      }
    },
  },
  validations: {
    userData: {
      name: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(60),
      },
      email: {
        email,
        required,
      },
      message: {
        maxLength: maxLength(200),
      },
    },
  },
  data() {
    return {
      userData: {
        name: "",
        email: "",
        message: "",
      },
      show: false,
      iconHover: "FFFF",
      media: [
        {
          icon: "fab fa-instagram",
          link: "https://www.instagram.com/lau_marques_anjos/",
          color: "#8a3ab9",
        },
        {
          icon: "fa fa-facebook-official",
          link: "https://www.facebook.com/laudisvan.marques",
          color: "#3b5998",
        },
        {
          icon: "fa fa-youtube-play",
          link: "https://www.youtube.com/channel/UCzv_NsMinL7ih8x9oub1zqg",
          color: "#c4302b",
        },
        {
          icon: "fa fa-linkedin",
          link: "https://www.linkedin.com/in/laudisvan-anjos-78467524/",
          color: "#0e76a8",
        },
        {
          icon: "fab fa-spotify",
          link:
            "https://open.spotify.com/artist/2YxGOxtuuIiq5EgXVSHjMX?si=SUtbYAJTSyCV_mtPO6DT2g",
          color: "#81b71a",
        },
      ],
    };
  },
};
</script>

<style scoped>
div.error {
  color: #c4302b;
  padding-top: 0.5rem;
}
</style>