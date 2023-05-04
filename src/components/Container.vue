<template>
  <div>
    <Post v-for="post in postsData" :key="post" :post="post"/>
  </div>
</template>

<script>
import Post from "@/components/Post";

export default {
  name: "Container",
  components: { Post },
  props: {
    postsData: Array,
  },
}
</script>

<style scoped>

</style>