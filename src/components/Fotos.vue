<template>
  <!-- Start Portfolio Section -->
  <div id="fotos" class="offset">
    <div class="container-fluid px-0">
      <div class="row justify-content-center py-5">
        <div class="col-12 mt-3" data-animation="animate__animated animate__fadeInUp">
          <h3 class="heading">Fotos</h3>
          <div class="heading-underline"></div>
        </div>

        <div class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInLeft" data-delay=".2s">
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/1.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="../../public/img/image5.jpeg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInLeft">
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/2.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="../../public/img/image4.jpeg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInRight">
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/3.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="../../public/img/image6.jpeg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div
          class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInRight"
          data-delay=".2s"
        >
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/4.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="../../public/img/image7.jpeg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInLeft" data-delay=".2s">
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/5.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="../../public/img/image8.jpg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInLeft">
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/6.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="../../public/img/image9.jpg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInRight">
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/7.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="../../public/img/image10.jpg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div
          class="col-sm-6 col-md-3 p-0 animate__animated animate__bounceInRight"
          data-delay=".2s"
        >
          <div class="portfolio-item overflow-hidden">
            <a
              href="img/portfolio/8.jpg"
              data-lightbox="example-set"
              data-title="My Portfolio Image Description"
            >
              <img src="img/portfolio/8.jpg" alt class="example-image w-100" />
            </a>
          </div>
        </div>

        <div class="col-10 col-lg-9 col-xl-8 text-center pt-5 animate__animated animate__fadeInUp">
          <p class="lead">
            Get in contact with us to see more of our great portfolio design work in addition to
            web development projects such as websites, apps and more!
          </p>
          <a href="#contact" class="btn btn-secondary btn-sm">Get In Touch</a>
        </div>
      </div>
      <!-- End Row -->
    </div>
    <!-- End Container -->
  </div>
  <!-- End of Fotos Section -->
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

 