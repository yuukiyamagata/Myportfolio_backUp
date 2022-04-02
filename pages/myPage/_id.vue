<template>
  <div class="mx-auto mypage-width mt-12">
    <v-container class="px-12">
      <v-row>
        <v-col cols="6">
          <v-row d-flex>
            <v-col cols="4">
              <v-avatar
                color="primary"
                size="100"
              >
              </v-avatar>
              <p class="pt-4">#userId{{ $route.params.id }}番のUserName</p>
            </v-col>
            <v-col cols="6">
              <p>ここに自己紹介がはいる</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn color="indigo" :to="{path: `/mypage/${$route.params.id}/edit`}" outlined>編集</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="userInfo">
      <v-divider></v-divider>
        <v-tabs>
          <v-tab @click="goToFav">お気に入りした参考書</v-tab>
          <v-tab @click="goToLike">私がおすすめした参考書</v-tab>
          <v-tab @click="goToFollow">フォロー</v-tab>
          <v-tab @click="goToFollower">フォロワー</v-tab>
      </v-tabs>
      <NuxtChild />
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        id: this.$route.params.id
      }
    },
    methods:{
      goToFav(){
        console.log('発火')
        this.$router.push(`/mypage/${this.id}/favorite`)
      },
        goToLike(){
        this.$router.push(`/mypage/${this.id}/like`)
      },
        goToFollow(){
        this.$router.push(`/mypage/${this.id}/follow`)
      },
        goToFollower(){
        this.$router.push(`/mypage/${this.id}/follower`)
      },
    }
  }
</script>

<style>

.mypage-width {
  max-width: 900px;
}

@media (min-width: 900px){
  .userInfo{
    max-width: 80%;
  }
}

</style>