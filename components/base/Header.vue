<template>
  <v-app-bar app class="white" clipped-left elevation="1">
    <header @click="$router.push('/')">
        <img :src="img_src" class="header-logo">
        <v-toolbar-title class="header-title">SANKOUSYO LABO</v-toolbar-title>
    </header>
    <v-spacer></v-spacer>

  <!-- 非ログイン時にこちら -->
    <!-- <nuxt-link to="/auth/login" class="link-border-line-none">
        <span v-if="isAuth">
          <v-btn
            outlined
            color="indigo"
            class="mr-4">
              ログイン
          </v-btn>
        </span>
    </nuxt-link>
    <nuxt-link to="/auth/register" class="link-border-line-none">
        <span v-if="isAuth">
          <v-btn
            outlined
            color="red"
            >
              新規登録
          </v-btn>
        </span>
    </nuxt-link> -->

    <!-- ログイン時 -->
    <div v-if="isAuth">
      <v-menu offset-y>
        <template #activator="{on}">
          <v-avatar color="orange" size="53" v-on="on">
            <span class="white--text">祐樹</span>
            <!-- <v-img :src="iconURl"></v-img> -->
          </v-avatar>
        </template>
        <v-list>
          <v-list-item-group >
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
        elevation="2"
        @click="createPost"
        color="primary"
        outlined
        class="ml-4"
      >
        新規投稿
      </v-btn>

    </div>


  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      img_src: require('@/static/logo.png'),
      isAuth: true,
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
  methods:{
    menuClick(action){

      if(action === 'logput'){
        const message = 'ログアウトしますか？'
        const result = confirm(message)
        if(!result) return // eslit-disable-line;
        console.log('ログアウト処理へ')
        }

        if(action === 'goToMyPage'){
          this.$router.push('/myPage/1')
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
.header-logo {
  object-fit: cover;
  width: 50px;
  height: 40px;
}

.header-title {
  font-size: 16px;
  margin-left: 6px;
  padding-top: 4%;
}

</style>