<template>
  <v-card
    class="mx-auto text-center my-12"
    max-width="384"
    >
    <v-img
    class="mx-auto"
      height="120"
      width="170"
      aspect-ratio="16/9"
      :src="image_src"
    ></v-img>
  <v-form ref="form" v-model="valid">
    <v-card-title>
      <p class="mx-auto font-weight-black pa-0">新規登録</p>
    </v-card-title>


    <v-card-text class="d-flex flex-column mx-auto">
      <v-text-field
        label="ユーザー名"
        placeholder="30文字以内"
        dense
        outlined
        v-model="userName"
        :rules="nameRules"
      />
      <v-text-field
        label="メールアドレス"
        placeholder="aaaa@example.com"
        dense
        outlined
        :rules="mailRules"
        v-model="email"
      />
      <v-text-field
        label="パスワード"
        v-model="password"
        placeholder="半角英数字8以上"
        dense
        outlined
        :type="isShow ? 'text' : 'password'"
        @click:append="isShow = !isShow"
        :append-icon="isShow ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
      />
    </v-card-text>
      <v-card-actions class="bg-green pa-0 text-center">
        <v-btn
          outlined
          color="indigo"
          class="mx-auto mb-4"
          @click="registerAccoumt"
        >
        登録する
      </v-btn>
      </v-card-actions>


    <v-divider class="mx-4"></v-divider>
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
          Twitterアカウントで登録
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
          Googleアカウントで登録
          </v-btn>
        </v-form>
        <v-btn text>
        <span style="font-size: 6px;">すでにアカウントをお持ちの方はこちらから</span>
          <nuxt-link
            color="teal accent-4"
            class="link"
            to="/auth/login"
            >
            ログイン
          </nuxt-link>
        </v-btn>

    </v-form>
  </v-card>
</template>

<script>
export default {
  layout: 'componentLess',
  data(){
    return {
      image_src: require('@/static/logo.png'),
      image_src_google: require('@/static/googleLogo.png'),
      image_src_twitter: require('@/static/Twitter.png'),
      userName:'',
      email:'',
      password:'',
      isShow: false,
      valid: false,
      nameRules: [
        (v) => !!v || "user name is required",
        (v) => (v && v.length <= 30) || "最大30文字です。",
      ],
      mailRules: [
        (v) => !!v || "mail is required",
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',],
      passwordRules: [
        (v) => !!v || "password is required",
        v => /^[\w-]{8,72}$/.test(v) || '半角英数字8文字以上'],
    }
  },
  methods:{
    validata(){
      this.$refs.form.validate();
    },
    registerAccoumt(){
      console.log(this.userName, this.password, this.email)
    }
  }

}
</script>

<style scoped>

.link {
  text-decoration: none;
}

.twitter-icon-color {
  color: rgba(29,161,242);
}



</style>