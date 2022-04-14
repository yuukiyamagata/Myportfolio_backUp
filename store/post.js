

export const state = () => ({
  recommendationPosts: null,
})

export const getters = {
  recommendationPosts: state => state.recommendationPosts
}

export const mutations = {
  setPostInfo(state, recommendationPosts) {
    state.recommendationPosts = recommendationPosts
  },
}


