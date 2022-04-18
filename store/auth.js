import {
        createUserWithEmailAndPassword,
        sendEmailVerification,
        updateProfile,
        getAdditionalUserInfo,
        GoogleAuthProvider,
        signInWithPopup,
        signInWithEmailAndPassword,
        signOut
      } from 'firebase/auth'
import { auth } from '@/plugins/firebase'


  export const state = () => ({
    isLoggedIn: false,
  })

  export const getters = {
    isLoggedIn: state => state.isLoggedIn,
  }

  export const mutations = {
    setLoginState(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    },
  }

export const actions = {
  // アカウント登録
  async RegisterWithEmailAndPassword({ dispatch }, { userName, email, password }) {

    try {
        const userCredentail = await createUserWithEmailAndPassword(auth, email, password)

        // 確証メール送信
        await sendEmailVerification(auth.currentUser)
        .then(() => alert('確証メールを送信しました'))

        // 初回ログインの確認
        const isNewUser = getAdditionalUserInfo(userCredentail).isNewUser

        await updateProfile(userCredentail.user, {
          displayName: userName,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then(() => {
          dispatch('userInfo/setUserInfo', userCredentail.user, { root: true })
            // ユーザーデータをUsersコレクションに格納する。
            dispatch('userInfo/storeUser', isNewUser, { root: true })
            console.log(userCredentail.user)
          })
          .catch(e => console.log(e))

          }catch(error){
            console.log({ 'code': error.code, 'message': error.message })
            if (error.code === "auth/email-already-in-use") {
              // dispatch('errorEmail')
              alert('既にメールアドレスが使用されています')
            }else {
              alert('新規登録に失敗しました。')
            }
          }
      },
      async signInWithGoogle({ dispatch }){
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const isNewUser = getAdditionalUserInfo(credential).isNewUser
            dispatch('userInfo/storeUser', isNewUser, { root: true })
            alert('Googleのサインインに成功しました')
        }catch(error){
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({ 'code': error.code, 'message': error.message, credential })
            alert('ログインに失敗しました')
        }
      },

        async login( { commit }, { email, password}) {
          await signInWithEmailAndPassword(auth, email, password)
          .then( userCredential => {
            commit('setLoginState', true)
            commit('setUserUid', userCredential.user.uid)
            alert('ログインしました')
            this.$router.push('/')
          })
          .catch(error => {
            if (error.code === "auth/wrong-password") {
              alert('パスワードが間違っています。')
            } else if (error.code === "auth/user-not-found") {
              alert('メールアドレスが間違っています。')
            } else {
              alert('ログインできません。')
            }
          })
      },

      async logout({ commit }) {
        await signOut(auth).then(() => {
          commit('setLoginState', false)
          commit('userInfo/logoutReset', null, { root: true })
          commit('post/logoutReset', null, { root: true })
          commit('getPosts/logoutReset', null, { root: true })
          commit('myPageInfo.js/logoutReset', null, { root: true })
        })
        .catch(e => {
          console.log(e)
        })
          alert('ログアウトしました')
          this.$router.push('/')
        },
  }


