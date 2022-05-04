<template>
  <div id="home" :class="['pa-4', {'bg-main': displayLists.length}]">
    <v-container fluid>
      <h3 class="headline font-weight-medium mb-4">Recommended Post</h3>
      <v-row>
        <v-col
          v-for="sankousho in displayLists"
          :key="sankousho.recommendation_book_id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="mx-xs-auto"
          >
            <v-card
              class="card mx-auto"
              width="380"
              flat
              tile
              router
              >
                    <v-img
                      height="200"
                      width="150"
                      :src="sankousho.recommendation_book_imageURL"
                      class="cursor text-center mx-auto"
                      @click="goToDetailPage(sankousho)"
                    >
                    </v-img>

              <v-row no-gutters>
                <v-col cols="2">
                  <v-list-item class="pl-0 mr-4 pt-3" router :to="`/mypage/${sankousho.post_user_uid}`">
                    <v-list-item-avatar color="grey darken-3">
                      <v-img
                        :alt="`${sankousho.iconURL} avatar`"
                          :src="sankousho.iconURL"
                          class="cursor elevation-6"
                          @click="goToProfile"
                      ></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
                </v-col>
                <v-col>
                  <v-card-title class="pl-2 pt-3 subtitle-1 font-weight-bold book-title">
                    {{ sankousho.recommendation_book_title }}
                  </v-card-title>

                  <v-card-subtitle class="pl-2 pb-8 comment">
                    {{ sankousho.recommendation_book_reason | omittedText15}}
                    <nuxt-link :to="`/books/${sankousho.recommendation_book_id}`">
                      続きを読む
                    </nuxt-link>
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
        </v-col>
      </v-row>



      <v-row v-if="displayLists.length > 12" class="mb-10" >
        <v-col  class="text-center">
          <v-pagination
            v-model="page"
            :length="length"
            circle
            @input ="pageChange"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>



<script>
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import  { db } from '@/plugins/firebase'

export default {
  filters:{
    omittedText15(text) {
      return text.length > 15 ? text.slice(0, 15) + "…" : text;
    }
  },
  data(){
    // sankoushoListsには全てのデータを持たせる
    // displayListにはブラウザに表示させるデータのみ持たせる
    return{
      page: 1,
      length:0,
      postRecommendations:[],
      displayLists: [],
      pageSize: 12,
      userData:[],
    }
  },
  async created(){
    const postRef = collection(db, "post_recommendations")
    const postQuery = query(postRef, orderBy("created_at", "desc"));
    try {
      // 作成日時順に並べるようにqueryを投げる
      const querySnapshot = await getDocs(postQuery);
      querySnapshot.forEach(doc => {
        this.postRecommendations.push({
          ...doc.data()
        })
      })

    }catch( e ){
      console.log( e )
    }
    this.length = Math.ceil(this.postRecommendations.length/this.pageSize);
    this.displayLists = this.postRecommendations.slice(this.pageSize*(this.page -1), this.pageSize*(this.page));;
    this.setPostInfo()
  },
  methods:{
    pageChange( pageNumber ){
    this.displayLists = this.postRecommendations.slice(this.pageSize*( pageNumber  -1), this.pageSize*( pageNumber ));
  },
  setPostInfo(){
    this.$store.commit('post/setPostInfo', this.postRecommendations)
  },
  //   this.$store.commit('userInfo/setUserInfo', this.userData)
  // },
  goToProfile(){
    console.log('go')
  },
  goToDetailPage(sankousho){
    this.$router.push(`/books/${sankousho.recommendation_book_id }`)
  }
  }

}
</script>


<style lang="scss">
.card {
  background: white !important;
}
.book-title  {
  overflow: hidden;
}
.comment {
  font-size: 16px;
  line-height: 1.2;
}
</style>

