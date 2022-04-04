<template>
  <v-container class="mx-auto edit-mypage-width" fluid>
    <v-row class="d-flex flex-column justify-space-between">
      <v-col cols="12">
        <v-img
            class="logo"
            :src="image_src"
            >
        </v-img>
        <v-divider class="my-4"></v-divider>
      </v-col>
      <v-col cols="12">
        <p class="text-body-1 font-weight-bold">プロフィール編集</p>
        <p class="text-body-2">以下の項目を入力してください</p>
      </v-col>
      <v-col cols="6" class="mb-4">
        <p class="text-caption">アイコン</p>
        <v-avatar color="primary" class="my-n14" size="56"></v-avatar>
        <v-btn small class="d-block mt-5" elevation="0">選択</v-btn>

      </v-col>
      <v-col cols="12" md="9">
        <p class="text-caption">ユーザー名</p>
        <v-text-field
            class="mt-n4"
            dense
            outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="9">
        <p class="text-caption">プロフィール</p>
        <v-textarea
          class="mt-n4"
          dense
          outlined
        ></v-textarea>
      </v-col>
      <v-col cols="12" md="9">
        <p class="text-caption">Twitter URl</p>
        <v-text-field
          label="(任意)"
          class="mt-n4"
          dense
          outlined
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn color="info" small elevation="0" @click="saveProfile">保存</v-btn>
          <v-btn class="ml-4"  small elevation="0" @click="back">戻る</v-btn>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  data(){
    return {
      image_src: require('@/static/logo.png')
    }
  },
  methods:{
    back(){
      this.$router.back();
    },
    saveProfile(){
      alert('プロフィールを保存しました')
      this.$router.back();
    }
  }
}
</script>

</script>

<style lang="scss" scoped>

.edit-mypage-width {
  max-width: 600px
}

</style>




