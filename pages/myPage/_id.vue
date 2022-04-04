<template>
  <div class="mx-auto mypage-width mt-12">
    <v-container class="px-12">
      <v-row>
        <v-col cols="9">
            <v-row dense>
              <v-col cols="12">
              <!-- ログイン者の画像が入る -->
                <v-row>
                  <v-col cols="12" class="d-flex">
                    <v-avatar size="70" color="primary" class="pt-2">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                        height="200px"
                      ></v-img>
                    </v-avatar>
                    <div class="ml-4">
                      <p class="pt-2">#{{ $route.params.id }}のUserName</p>
                      <v-img :src="image_src" class="twitter-icon-color" height="30px" width="30px"/>
                    </div>
                  </v-col>

                </v-row>
              </v-col>
              <v-col cols="12">
                <v-card elevation="0">
                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                  </v-card-text>
                </v-card>
              </v-col>



            </v-row>

        </v-col>
        <v-col cols="2">
          <v-btn
            color="indigo white--text"
            outlined
            elevation="0"
            @click="goToEditMypage"
            >編集</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="userInfo">
      <v-divider></v-divider>
        <v-tabs>
          <v-tab @click="goToHome">Home</v-tab>
          <v-tab @click="goToLike">私がおすすめした参考書</v-tab>
          <v-tab @click="goToFav">お気に入りした参考書</v-tab>
      </v-tabs>
      <NuxtChild />
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        image_src: require('@/static/TwitterLogo.png')
      }
    },
    computed:{
      id(){
        return Number(this.$route.params.id)
      }
    },
    methods:{
      goToEditMypage(){
        this.$router.push(`/mypage/${this.id}/mypageEdit`)
      },
      goToHome(){
        this.$router.push(`/mypage/${this.id}`)
      },
      goToLike(){
      this.$router.push(`/mypage/${this.id}/like`)
      },
      goToFav(){
        this.$router.push(`/mypage/${this.id}/favorite`)
      },
    }
  }
</script>

<style>

.mypage-width {
  max-width: 900px;
}

.twitter-icon-color {
  color: rgba(29,161,242);
}


@media (min-width: 900px){
  .userInfo{
    max-width: 80%;
  }
}

</style>



// v-container class="px-12">
//       <v-row>
//         <v-col cols="6">
//           <v-row d-flex>
//             <v-col cols="4">
//               <v-avatar
//                 color="primary"
//                 size="100"
//               >
//               </v-avatar>
//               <p class="pt-4">#userId{{ $route.params.id }}番のUserName</p>
//             </v-col>
//             <v-col cols="6">
//               <p>ここに自己紹介がはいる</p>
//             </v-col>
//           </v-row>
//         </v-col>
//         <v-col cols="4" class="text-right">
//           <v-btn color="indigo" :to="{path: `/mypage/${$route.params.id}/mypagEdit`}" outlined>編集</v-btn>
//         </v-col>
//       </v-row>
//     </v-container>