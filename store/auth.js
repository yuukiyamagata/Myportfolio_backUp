import {
        createUserWithEmailAndPassword,
        sendEmailVerification,
        updateProfile,
        getAdditionalUserInfo,
        GoogleAuthProvider,
        signInWithPopup
      } from 'firebase/auth'
import { auth } from '@/plugins/firebase'

  export const state = () => ({
    // ログイン状態を判別。
    isLoggedIn: false,
  })

  export const getters = {
    isLoggedIn: state => state.isLoggedIn,
  }

  export const mutations = {
    // ログイン時の処理をどうするか
    login(state) {
      state.isLoggedIn = true
    },
    // ログアウト時
    logout(state) {
      state.isLoggedIn = false
    },
  }

export const actions = {
  // アカウント登録
  async RegisterWithEmailAndPassword({ dispatch }, { userName, email, password }) {
    try {

        const userCredentail = await createUserWithEmailAndPassword(auth, email, password)


        // 確証メールを送る
        await sendEmailVerification(auth.currentUser)
        .then(() => alert('確証メールを送信しました'))

        // 初回ログインの確認
        const isNewUser = getAdditionalUserInfo(userCredentail).isNewUser

        // 初期情報をAuthに格納
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
      async signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user
            console.log('Credential ' + credential)
            console.log('user ' + user)
            alert('Googleのサインインに成功しました')
        }catch(error){
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({ 'code': error.code, 'message': error.message, credential })
            alert('ログインに失敗しました')
        }
      }
  }


