<template>
  <div class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  watch: {},
  created() {
    // this.$nextTick(() => {
    //   console.log(this.$refs.wrapper);
    // });
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
    //   pullUpLoad: true,
      probeType: this.probeType
    });
    this.scroll.on("scroll", postion => {
    //   console.log(postion);
      this.$emit('scroll-backtop',postion)
    });
    // this.scroll.on("pullingUp", () => {
    //   console.log("上拉加载更多");
    //   setTimeout(() => {
    //     this.scroll.finishPullUp();
    //   }, 2000);
    // });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>
<style scoped></style>
