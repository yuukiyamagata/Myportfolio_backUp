

import {  collection, addDoc } from 'firebase/firestore'
// import  { getAuth } from 'firebase/auth'
import { db } from '@/plugins/firebase'


export const state = () => ({
  recommendationPosts: null,
  myFavoritePost: [],
})

export const getters = {
  recommendationPosts: state => state.recommendationPosts,
  myFavoritePost: state => state.myFavoritePost
}

export const mutations = {
  setPostInfo(state, recommendationPosts) {
    state.recommendationPosts = recommendationPosts
  },
 async createFavPost(state, post ) {
    // const auth = getAuth()
    // const user = auth.currentUser
    const favPostref =  collection(db, 'users', 'QYA5fKYjnu9ULZ2vNYb7', 'favorite_posts')
    try {
      await addDoc(favPostref, {
      post_id: post.id
    })
    }catch( e ){
      console.log( e )
    }
  },
}

export const actions = {
  createFavorite({ commit, getters }, post){
    console.log( post )
    if(state.myFavoritePost.length) {
      state.myFavoritePost.forEach(element => {
        if(post.id !== element.id) {
          commit('createFavPost', post)
        } else {
          commit('deleteFavPost', post)
        }
      })
    } else {
      commit('createFavPost', post)
    }
  }
}


