<template>
  <div id="banda" class="offset">
    <div class="row light">
      <!-- Banda -->
      <div class="col-12 animate__animated animate__fadeInUp">
        <h3 class="heading">Quadra de Ases</h3>
        <div class="heading-underline"></div>
      </div>

      <div class="container">
        <div class="animate__animated animate__fadeInUp">
          <div id="team-carousel" class="owl-carousel owl-theme">
            <!-- card begin -->
            <div class="card">
              <img class="card-img-top" src="@/../public/img/image2.jpg" />
              <div class="card-body">
                <h4 class="font-weight-bold">Lau</h4>
                <h5 class="text-nuno">Sax</h5>
                <p class="border-top border-bottom py-3 my-3">Manja muito</p>
              </div>
            </div>
            <!-- card ends -->
          </div>
          <!-- end carousel  -->
        </div>
        <!-- end animation  -->
      </div>
      <!-- end container  -->
    </div>
    <!-- end row -->
  </div>
</template>


<style scoped>
.card {
  height: 100%;
  border-radius: 0;
  text-align: center;
  margin: 0 1rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.075);
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.075);
  transition: transform 0.4s ease;
}
.card:hover {
  transform: scale(0.95);
}
</style>