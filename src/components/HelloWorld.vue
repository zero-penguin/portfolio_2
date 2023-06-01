<template>
  <div id="hello">
    <div class="open"></div>
    <div class="container">
      <h2 class="title">自己紹介</h2>
      <div class="content">
        <div class="section">
          <img src="../assets/images/logo/title.png">
        </div>
        <div class="section">
          <h2>経歴</h2>
          <p>コザ高校卒業</p>
          <p>琉球大学在学中</p>
        </div>
        <div class="section">
          <h2>スキル</h2>
          <p>python 1年以上</p>
          <p>html/css/javascript 学習中</p>
          <p>フレームワークはvue3,Django,Flaskを学習中</p>
        </div>
        <div class="section">
          <h2>いろいろ</h2>
          <p>中学からずっとバスケットボールをしている。</p>
          <p>大学ではアートサークルに入っている。</p>
          <p>ホロライブというアイドルが好きで、IT業界に進んだきっかけ</p>
        </div>
        <div class="section">
          <h2>連絡先</h2>
          <p>TEL 090-6859-0853</p>
          <p>mail arakaki1060@icloud.com</p>
        </div>
      </div>
    </div>
    <div class="open"></div>
    <div id="skill">
    <h2>back</h2>
    <SlideShow></SlideShow>
    <h2>front</h2>
    
    </div>
    <div class="open"></div>
    <p>
      <video class="video-js" loop muted autoplay playsinline>
        <source src="../assets/video/seeyou.mp4" type="video/mp4">
      </video>
    </p>
    <div class="open"></div>
  </div>
</template>

<script>
import SlideShow from '../components/SlideShow.vue'

export default ({
  name: "HelloWorld",
  components: {
    SlideShow
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.open{
  width:300px;
  height: 300px;
}

img {
  position: relative;
  width: 50vw;
  height: 50vh;
  overflow: hidden;
}

img > video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
}
.video-js {
  position: relative;
  width: 60vw;
  height: 73vh;
  overflow: hidden;
  top: 50%;
  left: 20%;
}

.video-js > video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
}

h1 {
  font-family: 'Lobster', cursive;
  font: size 200%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #e0dcb7;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.container >.title {
  text-align: center;
  font-size: 32px;
  color: #fad762;
  margin-bottom: 40px;
}

.container >.content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.container >.section {
  margin-bottom: 30px;
}

.container > h2 {
  font-size: 24px;
  color: #f8efbc;
  margin-bottom: 10px;
}

.container > p {
  font-size: 18px;
  line-height: 1.5;
}

</style>
