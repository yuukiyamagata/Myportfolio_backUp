export const state = () => ({
  recommendationPosts: null,
})

export const getters = {
  recommendationPosts: state => state.recommendationPosts,
  myFavoritePost: state => state.myFavoritePost
}

export const mutations = {
  setPostInfo(state, recommendationPosts) {
    state.recommendationPosts = recommendationPosts
  },
}

export const actions = {
  // createFavorite({ commit, getters }, post){
  //   console.log( post )
  //   if(state.myFavoritePost.length) {
  //     state.myFavoritePost.forEach(element => {
  //       if(post.id !== element.id) {
  //         commit('createFavPost', post)
  //       } else {
  //         commit('deleteFavPost', post)
  //       }
  //     })
  //   } else {
  //     commit('createFavPost', post)
  //   }
  // }
}


