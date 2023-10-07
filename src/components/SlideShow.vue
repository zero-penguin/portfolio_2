<template>
  <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="100"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{ delay: 2500, disableOnInteraction: false }"
    :loop="true" 
  >
    <swiper-slide>
      <a href="https://zero-penguin.github.io/artcircle2/">
        <div class="slide-description"><h2>琉大アートクラブ HP</h2><br>所属するサークルの活動をPRする目的で作成しました。awslightsail上にデプロイしたものです。wordpressで作成しました。</div>
        <img src="../assets/images/work/artcicle_hp.png">
      </a>
    </swiper-slide>
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
    <swiper-slide>
      <a href="http://zeropenguin.pythonanywhere.com/">
        <div class="slide-description"><h2>生徒管理アプリ</h2>所属するバイト先のスタッフに快適な生徒管理を行ってもらうために作成しました。Pythonanywhereにデプロイしたものです。Djangoで作成しました。</div>
        <img src="../assets/images/work/studymenberApp2.png">
      </a>
    </swiper-slide>
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
    <swiper-slide>
      <a href="https://originalsite-flask.onrender.com/">
        <div class="slide-description"><h2>オリジナルアプリ 夢日記</h2><br>夢の内容を自然言語処理で分析し、それに沿った模様生成アプリを作成しました。水晶の中に星空が広がるイメージの模様です。Renderにデプロイしたものです。Flaskで作成しました。</div>
        <img src="../assets/images/work/dreamdialog2.png">
      </a>
    </swiper-slide>
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
    <swiper-slide>
      <a href="https://www.youtube.com/watch?v=-t-Vll8enS0&feature=youtu.be" target="_blank"> <!-- リンクを動画の実際のURLに変更 -->
        <div class="slide-description"><h2>制作したインスタレーション作品</h2><br>２０２３年９月に開催された大学祭において、美術系サークルの展示のためのインスタレーションアートに初挑戦しました。屋内空間に夜の屋外キャンプ場を表現し、来客者自らが懐中電灯で作品を鑑賞する、非日常的な体験による作品への没入感を意識しています。</div>  
          <img src="../assets/images/work/ryuudaisai.jpg"> <!-- プレビュー画像を表示 -->
      </a>
    </swiper-slide>
    <swiper-slide><img src="../assets/images/logo/barbershop.png"></swiper-slide>
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

<style scoped>

/* ホバー時に表示するスタイルを初期化 */
.slide-description {
  opacity: 0; /* 初期状態では非表示 */
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7); /* 背景の透明度を設定 */
  color: #fff; /* テキストの色を設定 */
  padding: 10px; /* パディングを追加 */
  transition: opacity 0.3s, transform 0.3s; /* アニメーションを設定 */
  transform: translateY(20px); /* 初期状態では下に隠れている */
  font-size:12px;
}

/* ホバー時にスライド内の説明欄を表示 */
.swiper-slide:hover .slide-description {
  opacity: 1; /* ホバー時に表示 */
  transform: translateY(0); /* ホバー時に上にスライドアウト */
}

/* メディアクエリを使用して画面が縮小したときに<h2></h2>要素以外を非表示にする */
@media (max-width: 768px) { /* 768px以下の画面幅で適用 */
  .slide-description > *:not(h2) {
    display: none;
  }
}


</style>