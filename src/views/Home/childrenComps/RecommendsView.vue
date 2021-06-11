<template>
  <div class="recommends">
    <div v-for="(item,i) in recommends" class="recommends-item" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
       <div>{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendsView",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.recommends {
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommends-item {
    flex: 1;
}
.recommends-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
</style>
