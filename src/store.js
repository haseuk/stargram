import { createStore } from 'vuex'
import postsData from "@/data/posts";

const store = createStore({
  state () {
    return {
      name: 'kim',
      age: 20,
      likes: 0,
      likeClicked: false,
      postsData: postsData,
    }
  },
  mutations: {
    nameChange(state) {
      state.name = 'park'
    },
    ageDec(state, payload) {
      state.age += payload;
    },
    likesToggle(state) {
      console.log(state)
      if(state.likeClicked === false) {
        state.likes += 1;
        state.likeClicked = true;
      } else {
        state.likes -= 1;
        state.likeClicked = false;
      }
    }
  }
});

export default store;