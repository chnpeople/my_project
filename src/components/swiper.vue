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
        <video width="100%" height="100%" :src="url" controls></video>
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
      url: '',
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
    };
  },
  created() {
    this.$axios({
      headers: {
        'content-Type': 'video/mpeg4'
      },
      methods: 'GET',
      responseType: 'blob',
      uri: 'http://www.tim007.xyz:8383/video',
      successCallback: (res) => {
        console.log(res);
        let blob = new Blob([res.data]);
        let blob2 = new Blob([res]);
        console.log(blob);
        console.log(blob2);
        let videoUrl = URL.createObjectURL(blob);
        this.url = URL.createObjectURL(blob);
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
