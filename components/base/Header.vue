<template>
  <v-app-bar app class="white" clippedLeft elevation="1">
    <header @click="$router.push('/')">
        <img :src="img_src" class="logo">
        <v-toolbar-title class="header-title">SANKOUSYO LABO</v-toolbar-title>
    </header>
    <v-spacer></v-spacer>

  <!-- 非ログイン -->
    <nuxt-link to="/auth/login" class="link-border-line-none">
        <span v-if="!isLoggedIn">
          <v-btn
            outlined
            color="indigo"
            class="mr-4">
              ログイン
          </v-btn>
        </span>
    </nuxt-link>
    <nuxt-link to="/auth/register" class="link-border-line-none">
        <span v-if="!isLoggedIn">
          <v-btn
            outlined
            color="red"
            >
              新規登録
          </v-btn>
        </span>
    </nuxt-link>

    <!-- ログイン時 -->
    <div v-if="isLoggedIn">
      <v-menu offsetY>
        <template #activator="{on}">
          <v-avatar color="orange" size="53" v-on="on">
            <v-img :src="iconURL"></v-img>
          </v-avatar>
        </template>
        <v-list>
          <v-list-item-group>
            <v-list-item
                v-for="menu in menus"
                :key="menu.name"
                :to="menu.to"
                @click="menuClick(menu.action)"
                >
              <v-list-item-icon class="mr-4">
                <v-icon>{{ menu.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ menu.name }}
                  </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <v-btn
        elevation="0"
        color="indigo"
        class="ml-4 white--text"
        @click="createPost"
        >
        <v-icon small class="mr-2">mdi-pencil</v-icon>
        投稿
      </v-btn>

    </div>


  </v-app-bar>
</template>

<script>
import {auth } from "@/plugins/firebase"
export default {
  data() {
    return {
      img_src: require('@/static/logo.png'),
      menus:[
        {
          name: 'HOME',
          icon: 'mdi-home',
          to: '/',
        },
        {
          name: 'マイページ',
          icon: 'mdi-account',
          action: 'goToMyPage'
        },
        {
          name:'ログアウト',
          icon: 'mdi-logout',
          action: 'logout'
        },
      ]
    }
  },
  computed:{
    isLoggedIn(){
      return this.$store.getters['auth/isLoggedIn']
    },
    iconURL(){
      return this.$store.getters['userInfo/loginUserInfo'].iconURL
    }
  },
  created(){
    const isLoggedIn = this.$store.getters['auth/isLoggedIn']
    if(isLoggedIn){
      const currentUserUid = this.$store.getters['userInfo/user'].userUid
      console.log( currentUserUid )
    }
  },
  methods:{
    menuClick(action){

      if(action === 'logout'){
        const message = 'ログアウトしますか？'
        const result = confirm(message)
        if(!result) return // eslit-disable-line;
        console.log('ログアウト処理へ')
        }

        if(action === 'goToMyPage'){
          const uid = auth.currentUser.uid
          // const user = auth.currentUser
          // if(user.emailVerified == true){
          // }
          this.$router.push(`/mypage/${uid}`)
        }else {
          // eslint-disable-next-line no-useless-return
          return
        }

    },
    createPost(){
      // User情報の確認認可しているかどうか
      this.$router.push('/posts/create')
    }
  }

}
</script>

<style>

header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
}

.header-title {
  font-size: 16px;
  margin-left: 6px;
  padding-top: 4%;
}

</style>
