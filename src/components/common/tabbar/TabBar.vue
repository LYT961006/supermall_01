<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  props: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  font-size: 12px;
  bottom: 0;
  text-align: center;
  background-color: #f6f6f6;
  height: 49px;
  box-shadow: 0 -1px 0 0 rgba(100, 100, 100, .3);
}

</style>
