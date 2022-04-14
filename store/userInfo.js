import {
        setDoc,
        doc,
        serverTimestamp,
        getDoc
        // getDocs,
      }from 'firebase/firestore'
import { db } from '@/plugins/firebase'

export const state = () => ({
  user: {
    userName: '',
    userUid: '',
    photoURL: '',
    emailVerified: ''
  },
  // ログインユーザーの情報
  loginUserInfo: {
    userName: '',
    introduction : '',
    photoURL: "https://example.com/jane-q-user/profile.jpg",
    twitterUR: ''
  }
})

export const getters = {
  user: state => state.user,
  loginUserInfo: state => state.loginUserInfo,
}


export const mutations = {
  // authのユーザー情報を取得しStateに設定
  setUserInfo(state, userInfo){
    state.user.userUid = userInfo.uid,
    state.user.userName = userInfo.userName,
    state.user.photoURL = userInfo.photoURL
    // state.user.emailVerified = userInfo.emailVerified
  },

  fetchUserInfo(state, userData){
    console.log(userData)
    state.loginUserInfo.userName = userData.username
    state.loginUserInfo.iconURL = userData.iconURL
  },
}

export const actions = {
  // authのユーザー情報をstateに格納する。
  setUserInfo({ commit }, userInfo) {
    commit('setUserInfo', userInfo)
    console.log('userINfo ' + userInfo)
  },
  // stateのUserをfirestoreのUsersコレクションに格納する。
  // user.userUidはAuthIdとする
  async storeUser({ getters, dispatch }, isNewUser) {
    const userUid = getters.user.userUid
    try {

      if (isNewUser === true) {
        // 初回ログインの場合の分岐
        const userDocRef =  doc(db, 'users', userUid)
        const documentRef = await setDoc(userDocRef, {
          username: getters.user.userName,
          iconURL: getters.user.iconURL,
          uid: userUid,
          created_at: serverTimestamp()
          })

          console.log(documentRef)

          dispatch('fetchUserInfo')
        }else{
          dispatch('fetchUserInfo')
          }

    }catch(error){
        console.log(error)

      }
    },
    async fetchUserInfo({ getters, commit }) {
      const userUid = getters.user.userUid
      try {
        const docRef = doc(db, "users", userUid)
        const docSnap = await getDoc(docRef)
        commit('fetchUserInfo', docSnap.data())
      } catch(error) {
          console.log(error)
      }
    },


  }
