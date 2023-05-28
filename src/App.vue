<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="this.contentInc">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="content <= 1" @click="this.contentDec">Next</li>
      <li v-else @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :selectFilter="selectFilter" :postsData="postsData" :content="content" :url="uploadImgUrl" @write="write"/>
<!--  <button @click="more">더보기</button>-->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

</template>

<script>
import Container from "@/components/Container";
import postsData from "@/data/posts";
import axios from "axios";

export default {
  name: 'App',
  components: { Container },
  data() {
    return {
      postsData: postsData,
      moreStatus: 0,
      content: 0,
      uploadImgUrl: '',
      uploadWrite: '',
      selectFilter: '',
    }
  },
  mounted() {
    this.emitter.on('selectFilter', (v) => {
      this.selectFilter = v;
    })
  },
  methods: {
    more() {
      axios.get('https://codingapple1.github.io/vue/more'+this.moreStatus+'.json')
      .then((result) => {
        this.postsData.push(result.data);
        this.moreStatus += 1;
      })
      .catch((err) => {
        alert('더이상 게시물이 존재하지 않습니다.');
        console.log(err)
      })
    },
    contentDec() {
      if(this.uploadImgUrl === '') return;
      this.content += 1;
    },
    contentInc() {
      if(this.content < 1) return;
      this.content -= 1;
    },
    upload(e) {
      let pic = e.target.files;
      this.uploadImgUrl = URL.createObjectURL(pic[0]);
      this.contentDec();
    },
    publish() {
      let addPostData = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.uploadWrite,
        filter: this.selectFilter,
      };
      this.postsData.unshift(addPostData);
      this.content = 0;
    },
    write(txt) {
      this.uploadWrite = txt;
    },
  }
}
</script>

<style>
  body {
    margin: 0;
  }
  ul {
    padding: 5px;
    list-style-type: none;
  }
  .logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
  }
  .header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
  }
  .header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
  }
  .header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
  }
  .footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
  }
  .footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
  }
  .sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
  }
  .inputfile {
    display: none;
  }
  .input-plus {
    cursor: pointer;
  }
  #app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
  }
</style>
