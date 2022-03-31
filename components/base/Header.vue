<template>
  <v-app-bar app class="white" clipped-left elevation="1">
    <header @click="$router.push('/')">
        <img :src="img_src" class="header-logo">
        <v-toolbar-title class="header-title">SANKOUSYO LABO</v-toolbar-title>
    </header>
    <v-spacer></v-spacer>
      <v-btn
      outlined
      color="indigo"
      class="mr-4"
      @click="$router.push('/auth/login')">
        ログイン
      </v-btn>
      <v-btn
      outlined
      color="red"
      @click="$router.push('/auth/register')"
      >
        新規登録
      </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      img_src: require('@/static/logo.png')
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