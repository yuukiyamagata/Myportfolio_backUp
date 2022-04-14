
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/plugins/firebase.js'


export const state = () => ({
  profileInfo: {
    username: '',
    introduction: '',
    // twitterURL: '',
    iconURL: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
  },
})

export const getters = {
  profileInfo: state => state.profileInfo
}

export const mutations = {
  setUserInfo(state, profileInfo) {
    state.profileInfo = profileInfo
  },

  }

// プロフィール情報を取得
export const actions = {
  async getUserInfo({ commit }, uid) {
    try {
      const docRef = doc(db, "Users", uid);
      const docSnap = await getDoc(docRef)
      commit('setUserInfo', docSnap.data())
    } catch(error) {
      console.error( error )
    }
  },
  async editMyPage( { commit }, myPageInfo){

  }
}


