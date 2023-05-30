<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?" @input="search($event.target.value);" />
    <div class="post-header" v-for="profile in follower" :key="profile">
      <div class="profile" :style="`background-image:url(${profile.image})`"></div>
      <span class="profile-name">{{profile.name}}</span>
    </div>
  </div>
</template>

<script>
import { onMounted,ref } from 'vue';
import axios from "axios";

export default {
  name: "MyPage",
  setup() {
    let follower = ref([]);
    let followerOrigin = ref([]);

    onMounted(() => {
      axios.get('/follower.json').then((a) => {
        follower.value = a.data
        followerOrigin.value = [...a.data]
      })
    });

    function search(v) {
      let newFollower = followerOrigin.value.filter((inp) => {
        return inp.name.indexOf(v) != -1
      });
      follower.value = [...newFollower]
    }

    return {follower,search}
  },
}
</script>

<style scoped>
  .post-header { margin: 5px; }
  .post-header .profile { width: 30px; height: 30px; border-radius: 50%; display: inline-block; vertical-align: middle; margin-right: 10px; }
</style>