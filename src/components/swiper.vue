<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      ref="swiperTop"
    >
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <swiper-slide>
        <video-player
          v-if="isShow"
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </swiper-slide>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  name: 'swiper-example-thumbs-gallery',
  title: 'Thumbs gallery with Two-way control',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isShow: false,
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
      videoUrl: '',
      playerOptions: {},
    };
  },
  created() {
    this.$axios({
      methods: 'GET',
      uri: 'https://www.snrthn.com/api/download/video',
      successCallback: (res) => {
        console.log(res);
        let blob = new Blob([res.data]);
        let blob2 = new Blob([res]);
        console.log(blob);
        console.log(blob2);
        let videoUrl = URL.createObjectURL(blob);
        this.playerOptions = {
          playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: 'video/mp4', //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
              src: videoUrl, //url地址
            },
          ],
          // poster: '../../static/images/test.jpg', //你的封面地址
          // width: document.documentElement.clientWidth, //播放器宽度
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true, //全屏按钮
          },
        };
        this.isShow = true
      },
    });
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
.thumb-example {
  width: 600px;
  height: 480px;
  background-color: transparent;
}
.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
      background-image: url('../assets/images/1.jpg');
    }
    &.slide-2 {
      background-image: url('../assets/images/2.jpg');
    }
    &.slide-3 {
      background-image: url('../assets/images/3.jpg');
    }
    &.slide-4 {
      background-image: url('../assets/images/4.jpg');
    }
    &.slide-5 {
      background-image: url('../assets/images/5.jpg');
    }
  }
  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
    /deep/ .swiper-slide {
      border: 2px solid #fff;
    }
    /deep/ .swiper-slide-active[data-v-de5112f0] {
      border: 2px solid green;
    }
    /deep/ .swiper-slide[data-v-de5112f0] {
      opacity: 1 !important;
    }
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}
.swiper-button-next,
.swiper-button-prev {
  display: none;
  // color: #56cfe1;
}
.gallery-top:hover .swiper-button-next,
.gallery-top:hover .swiper-button-prev {
  display: block;
  // color: #56cfe1;
}
</style>
