<template>
  <div class="carrousel-fotos">
    <h2>Melhores Momentos</h2>
    <!-- <b-container class="bv-example-row"> -->
    <VueSlickCarousel v-bind="settings">
      <div>
        <img src="../assets/nossas-fotos/foto (1).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (2).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (3).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (4).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (5).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (6).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (7).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (8).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (9).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (10).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (12).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (13).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (14).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (15).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (16).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (17).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (18).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (19).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (20).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (21).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (22).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (23).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (24).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (25).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (26).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (27).png">
      </div>

      <div>
        <img src="../assets/nossas-fotos/foto (28).png">
      </div>

    </VueSlickCarousel>
    <!-- </b-container> -->
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        fade: true,
        speed: 800,
        autoplay: true
      },
    }
  },
}
</script>

<style scoped>
.carrousel-fotos {
  background-image: url('../assets/background_14.jpg');
  background-size: cover;
  padding: 50px 150px;
}

.carrousel-fotos h2 {
  font-size: clamp(2rem, 3vw, 4rem);
  margin: 0 0 10px;
  font-weight: 200 !important;
  color: #5a5a5a;
}

.carrousel-fotos img {
  width: 80%;
  padding: 40px 50px;
  margin: 0 auto
}

@media(max-width:992px) {
  .carrousel-fotos {
    padding: 50px 30px;
  }

  .carrousel-fotos img {
    width: 100%;
    padding: 30px 0px;
  }
}
</style>