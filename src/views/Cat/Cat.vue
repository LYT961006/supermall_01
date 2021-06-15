<template>
  <div class="wrapper" ref="aaa">
    <ul class="content">
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
    console.log(this.$refs.aaa);
    this.scroll = new BScroll(this.$refs.aaa, {});
  },
  methods: {}
};
</script>
<style scoped>
.wrapper {
  height: 200px;
  background-color: tomato;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>
