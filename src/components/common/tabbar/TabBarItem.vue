<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="getActive"><slot name="icon-active"></slot></div>
    <div v-else><slot name="icon"></slot></div>
    <div :style="getActiveText">
      <slot name="text"></slot> 
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    ActiveText: {
      type: String,
      default: "#d4237a"
    },
    path: {
      type: String,
      required: true
    }
  },
  computed: {
    getActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    getActiveText() {
      return this.getActive ? { color: this.ActiveText } : {};
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 3px;
  margin-top: 2px;
}
</style>
