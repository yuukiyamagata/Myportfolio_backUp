## ログイン周り

onAuthStateChanged
引数に認証の状態が変わった時に呼び出されるコールバック関数を受け取れる
ログインやログアウトした際に引数の関数がよばれる
ログインした際には 引数にuserのオブジェクトが渡ってくる

ログアウトした際にはにnullが渡ってくくる



~~~js
//ログインしているかどうかの情報を持たせる

import { getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const state = () => ({
  isLoggedIn: false,
  userUid: '',
  email: '',
})

// stateの参照はgetters

export const getters = {
  getLoggedIn: state => !!state.isLoggedIn, // !!で真偽値にキャスト
  getUserUid:state => state.userUid,
  getEmail: state => state.email

}

export const mutations = {
  setLoginState( state, loggedIn ){
    state.isLoggedIn = loggedIn
  },
  setUserUid( state, userUid ){
    state.userUid = userUid
  },
  setEmail( state, email ){
    state.email = email
  }
}


export const actions = {
  async login( { commit }, payload) {
    const auth = getAuth(this.$firebase)
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
    .then( userCredential => {
      commit('setLoginState', true)
      commit('setUserUid', userCredential.user.uid)
      commit('setEmail', userCredential.user.email)
      console.log('うまくいきました')
      this.$router.push('/')
    })
    .catch(e => {
      console.error(e)
    })
  },
  async logout( { commit }){
    const auth = getAuth(this.$firebase)
    await signOut(auth)
    .then(() => {
      commit('setLoginState', false)
      commit('setUserUid', '')
      commit('setEmail', '')
      this.$router.push('/auth/login')
      console.log('ログアウト成功')
    })
    .catch(e => {
      console.log(es)
    })
  },
  // addUserInfo({ commit }, payload){
  //   commit('setLoginUser', true)
  //   commit('setUserUId', payload.uid)
  //   commit('setEmial', payload.email)
  // }
}


~~~


ページ表示時

ログインしてるかどうか確認
-> ログインしていればそのまま表示
-> していなければログインページにリダイレクト

ログイン必要な全てのページで確認が必要

middleware 読み込み時に確証状態の確認

vuex 確証状態の保持


input checkBox checkedプロパティ
チェックされた状態であるかどうかを示す値を取得または設定します。
チェックボックスがONの場合 True、そうでなければ False。デフォルト値は False です。

未ログインならリダイレクト

middleware/authenticatd.jsを作成

middlewareはNuxtの機能なのでcontextを使える
pliginは$をつけて取得できる

export default function({
  $firebase, store, state, redirect
})
{
  const isAuthenticated = store.getters['auth/getLoggedIn']
  string.match(/文字列/)の文字列を含むかのチェック
  if(!isAuthenticated && !route.path.match(/\auth\/)){
    // \（バックスラッシュ）で逃している
    redirect('/auth/login')
  }

}
リロードでstateが消える問題について
onAuthStateChanged()を実行
するとログインしているユーザーついての情報が得られる
ログイン状態であればStateに保存してからリダイレクトする
   const auth = getAuth($firebase)
   if(!store.getters['auth/getLoggedIn']){
    onAuthStateChanged(auth, user => {
       if(user){
         store.dispatch('auth/addUserInfo', user)
       }else if (!route.path.match(/\/auth\//)){
         redirect('/auth/login')
       }
     })
   }


   middleware/authenticatd.js

   // import { getAuth, onAuthStateChanged} from 'firebase/auth'

// export default function({
//   $firebase,
//   store,
//   route,
//   redirect,

// })
// {
//   const auth = getAuth($firebase)
//   if(!store.getters['auth/getLoggedIn']){
//     onAuthStateChanged(auth, user => {
//       if(user){
//         store.dispatch('auth/addUserInfo', user)
//       }else if (!route.path.match(/\/auth\//)){
//         redirect('/auth/login')
//       }
//     })
//   }

// }

Hosting

configあり
Use an existing project

What do you want to use as your public directory?
A, dist

Configure as a single-page-app?
y

Git build
N

デプロイ
firebase serve --only Hosting
公開用ファイルを生成する必要あり

npm run generate
・・・distフォルダ内に必要ファイルが生成

デプロイ
fireabse deploy


ページ表示時

ログイン周り
https://firebase.google.com/docs/auth/web/manage-users?hl=ja

Googleログイン参考
https://www.youtube.com/watch?v=LrhYbXOGLZo&t=212s&ab_channel=%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB




ログアウトした際にはにnullが渡ってくくる


ログインしてるかどうか確認
-> ログインしていればそのまま表示
-> していなければログインページにリダイレクト

ログイン必要な全てのページで確認が必要

middleware 読み込み時に確証状態の確認

vuex 確証状態の保持


input checkBox checkedプロパティ
チェックされた状態であるかどうかを示す値を取得または設定します。
チェックボックスがONの場合 True、そうでなければ False。デフォルト値は False です。

未ログインならリダイレクト

middleware/authenticatd.jsを作成

middlewareはNuxtの機能なのでcontextを使える
pliginは$をつけて取得できる

export default function({
  $firebase, store, state, redirect
})
{
  const isAuthenticated = store.getters['auth/getLoggedIn']
  string.match(/文字列/)の文字列を含むかのチェック
  if(!isAuthenticated && !route.path.match(/\auth\/)){
    // \（バックスラッシュ）で逃している
    redirect('/auth/login')
  }

}
リロードでstateが消える問題について
onAuthStateChanged()を実行
するとログインしているユーザーついての情報が得られる
ログイン状態であればStateに保存してからリダイレクトする
   const auth = getAuth($firebase)
   if(!store.getters['auth/getLoggedIn']){
    onAuthStateChanged(auth, user => {
       if(user){
         store.dispatch('auth/addUserInfo', user)
       }else if (!route.path.match(/\/auth\//)){
         redirect('/auth/login')
       }
     })
   }


   middleware/authenticatd.js

   // import { getAuth, onAuthStateChanged} from 'firebase/auth'

// export default function({
//   $firebase,
//   store,
//   route,
//   redirect,

// })
// {
//   const auth = getAuth($firebase)
//   if(!store.getters['auth/getLoggedIn']){
//     onAuthStateChanged(auth, user => {
//       if(user){
//         store.dispatch('auth/addUserInfo', user)
//       }else if (!route.path.match(/\/auth\//)){
//         redirect('/auth/login')
//       }
//     })
//   }

// }

Hosting

configあり
Use an existing project

What do you want to use as your public directory?
A, dist

Configure as a single-page-app?
y

Git build
N

デプロイ
firebase serve --only Hosting
公開用ファイルを生成する必要あり

npm run generate
・・・distフォルダ内に必要ファイルが生成

デプロイ
fireabse deploy



ユーザーのプロフィールを取得する
ユーザーのプロフィール情報を取得するには、User のインスタンスのプロパティを使用します。次に例を示します
~~~js
const auth = getAuth();
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}
~~~


## ログインユーザーの取得
onAuthStateChangedの説明
引数に認証の状態が変わった時に呼び出されるコールバック関数を受け取れる
ログインやログアウトした際に引数の関数がよばれる
ログインした際には 引数にuserのオブジェクトが渡ってくる

auth.onAuthStateChanged( user => {
  if( user ){
    setLoginUser(user)
  }
})
