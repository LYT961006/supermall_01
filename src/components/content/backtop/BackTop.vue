<template>
  <div class="back-top">
    <img src="@/assets/img/backtop/top.png" alt="" />
  </div>
</template>
<script>
export default {
  name: "BackTop",
  data() {
    return {};
  },
  props: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    //   backClick(){
    //       this.$emit('backClick')
    //   }
  }
};
</script>
<style scoped>
.back-top {
    position: fixed;
    right: 5px;
    bottom: 52px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
