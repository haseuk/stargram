<template>
  <div class="filter-item" :style="`background-image:url(${url})`" @click="fire">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    url: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit('selectFilter', this.filter)
    }
  }
}
</script>

<style scoped>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
}
.filter-item:last-child {
  margin-right: 0;
}
</style>