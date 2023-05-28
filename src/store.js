import { createStore } from 'vuex'
import postsData from "@/data/posts";

const store = createStore({
  state () {
    return {
      name: 'kim',
      age: 20,
      likes: 0,
      likeClicked: true,
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
      if(state.likeClicked === true) {
        state.likes += 1;
        state.likeClicked = false;
      } else {
        state.likes -= 1;
        state.likeClicked = true;
      }
    }
  }
});

export default store;