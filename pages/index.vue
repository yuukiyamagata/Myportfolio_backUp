<template>
    <v-container class="mt-12 mb-12 bg-main" fluid>
    <v-row noGutters class="d-flex justify-space-between mb-10">
      <!-- サイズが小さい時display: none -->
        <v-col cols="12" sm="12" md="2">
              <SideMenu class="mt-10 mb-10" />
          </v-col>

          <v-col cols="12" sm="8" md="9" class="mx-auto">
                <v-container fluid>
                  <v-row>
                    <v-col
                      v-for="sankousho in displayLists"
                      :key="sankousho.recommendation_book_id"
                      cols="8"
                      sm="6"
                      md="4"
                      class="sp-display"
                    >
                      <v-card
                        color="grey lighten-5"
                        maxWidth="300px"
                        >
                        <v-container fluid>
                          <v-row noGutters>
                              <v-col cols="6" class="mx-auto">
                                <v-responsive :aspectRatio="16/9">
                                  <v-img
                                    :src="sankousho.recommendation_book_imageurl"
                                  >
                                  </v-img>
                                </v-responsive>
                              </v-col>
                            <v-col cols="12">
                              <v-card-title>
                                {{ sankousho.title }}
                              </v-card-title>
                              <v-card-subtitle>
                                {{ sankousho.author }}
                              </v-card-subtitle>

                              <v-divider class="mb-4"></v-divider>
                            </v-col>
                                <v-col cols="3">
                                <v-avatar
                                  color="primary"
                                  size="50"
                                >
                                <v-img :src="sankousho.iconURL"></v-img>
                                </v-avatar>
                                <p class="user-name" @click="goToProfile">@{{ sankousho.post_user_name }}</p>
                                </v-col>

                                <v-col cols="9">
                                  <v-card-text class="comment font-weight-medium">
                                    {{ sankousho.reason }}
                                    <nuxt-link :to="`/books/${sankousho.recommendation_book_id }`">続きを読む</nuxt-link>
                                    </v-card-text>
                                </v-col>

                          </v-row>
                        </v-container>

                      </v-card>

                    </v-col>
                  </v-row>
                </v-container>
          </v-col>
      </v-row>

      <v-row class="mb-10">
        <v-col class="text-center">
          <v-pagination
            v-model="page"
            :length="length"
            circle
            @input ="pageChange"
          ></v-pagination>
        </v-col>
      </v-row>


    </v-container>
</template>

<script>
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import  { db } from '@/plugins/firebase'

export default {
  components: {
    SideMenu: () => import("~/components/base/SideMenu"),
  },
  data(){
    // sankoushoListsには全てのデータを持たせる
    // displayListにはブラウザに表示させるデータのみ持たせる
    return{
      page: 1,
      length:0,
      sankoshoLists:[],
      displayLists: [],
      pageSize: 9,
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
        this.sankoshoLists.push({
          ...doc.data()
        })
      })

    }catch( e ){
      console.log( e )
    }
    this.length = Math.ceil(this.sankoshoLists.length/this.pageSize);
    this.displayLists = this.sankoshoLists.slice(this.pageSize*(this.page -1), this.pageSize*(this.page));;
    this.setPostInfo()
  },
  methods:{
    pageChange( pageNumber ){
    this.displayLists = this.sankoshoLists.slice(this.pageSize*( pageNumber  -1), this.pageSize*( pageNumber ));
  },
  setPostInfo(){
    this.$store.commit('post/setPostInfo', this.sankoshoLists)
  },
  setUserInfo(){
    this.$store.commit('userInfo/setUserInfo', this.userData)
  },
  goToProfile(){
    console.log('go')
  }
  }

}
</script>

<style scoped>

.comment {
  font-size: 12px;
  line-height: 1.2;
}

.user-name {
  display: inline-block;
  padding-top: 3px;
  font-weight: bold;
  font-size: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 600px){
  .sp-display {
    margin: 0 auto;
  }
}

</style>
