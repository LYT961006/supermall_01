<template>
  <div ref="wrapper" class="wrapper">
    <ul>
      <button @click="btnClick">按钮</button>
      <div @click="divClick">哈哈哈</div>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "Cat",
  data() {
    return {
      scroll: null
    };
  },
  props: {},
  watch: {},
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      pullUpLoad: true,
      click:true
    });
    this.scroll.on("scroll", pos => {
      // console.log(pos);
    });
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 2000);
    });
  },
  methods: {
    btnClick() {
      console.log("btnClick");
    },
    divClick() {
      console.log("divClick");
    }
  }
};
</script>
<style scoped>
.wrapper {
  height: 200px;
  background-color: tomato;
  overflow: hidden;
}
</style>
