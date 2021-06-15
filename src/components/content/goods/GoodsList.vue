<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods"
      :key="item"
      :goods-item="item"
    />
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  data() {
    return {};
  },
  components: {
    GoodsListItem
  },
  props: {
    goods: {
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
<style scoped></style>
