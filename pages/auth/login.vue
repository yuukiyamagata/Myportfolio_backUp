<template>
  <v-card
    class="mx-auto text-center flat my-12"
    max-width="384"
    color="#fff"
  >
  <v-card-title class="bg-color pa-0">
    <p class="text-center mx-auto pt-4 font-weight-black">ログイン</p>
  </v-card-title>
  <v-card-text>
    <v-form>
      <v-text-field
        v-model="userName"
        prepend-icon="mdi-account-circle"
        label="ユーザー名" />
      <v-text-field
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        label="パスワード"
        @click:append="showPassword = !showPassword" />
      <v-card-actions>
        <v-btn block class="primary" @click="submit">ログイン</v-btn>
      </v-card-actions>
      <nuxt-link to="/auth/forgetPassword" class="d-block">パスワードお忘れの方はこちら</nuxt-link>
    </v-form>
    </v-card-text>

    <v-divider></v-divider>

<v-form class="mt-3">
    <v-btn
      rounded
      class="my-6 twitter-icon-color"
      color="white white--light"
      style="text-transform: none; width: 85%;"
      >
    <span>
        <v-img
          height="20px"
          width="20px"
          :src="image_src_twitter"
          class="mr-4"
        />
    </span>
    Twitterアカウントでログイン
    </v-btn>
    <v-btn
      rounded
      class="mb-6"
      color="white"
      style="text-transform: none; width: 85%;"
    >
    <span>
      <v-img
      height="20px"
      width="20px"
      :src="image_src_google"
      class="mr-4"
      />
    </span>
    Googleアカウントでログイン
    </v-btn>
  </v-form>
  </v-card>

</template>

<script>
export default {
  layout: 'componentLess',
  data(){
    return {
      showPassword: false,
      userName: '',
      password: '',
      image_src_google: require('@/static/GoogleLogo.png'),
      image_src_twitter: require('@/static/TwitterLogo.png')
    }
  },
  methods: {
    submit(){
      console.log('submit')
    }
  }

}
</script>

<style>


</style>