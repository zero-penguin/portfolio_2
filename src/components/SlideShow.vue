<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :loop="true" 
  >
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
    <swiper-slide>
      <a href="https://zero-penguin.github.io/artcircle2/">
        <img src="../assets/images/work/artcicle_hp.png">
      </a>
    </swiper-slide>
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
    <swiper-slide>
      <a href="https://okinawa-citys.onrender.com/signup">
        <img src="../assets/images/work/okinawasityApp.png">
      </a>
    </swiper-slide>
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
    <swiper-slide>
      <a href="https://zero-penguin.github.io/polka2/">
        <img src="../assets/images/work/funsite.png">
      </a>
    </swiper-slide>
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
    <swiper-slide>
      <a href="https://zero-penguin.github.io/vue-todolist/">
        <img src="../assets/images/work/godziraApp.png">
      </a>
    </swiper-slide>
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import SwiperCore, { Autoplay } from 'swiper';
  import 'swiper/swiper-bundle.css';

  SwiperCore.use([Autoplay]);

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
  };
</script>

<style>
</style>