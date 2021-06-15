<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    tabClick(i) {
      this.currentIndex = i;
      this.$emit('tab-click',i)
    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 3px;
}
.active span {
  border-bottom: 3px solid #ff8e97;
}
.active {
  color: #ff8e97;
}
</style>
