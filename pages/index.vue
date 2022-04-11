<template>
    <v-container class="mt-12 mb-12 bg-main" fluid>
    <v-row no-gutters class="d-flex justify-space-between mb-10">
      <!-- サイズが小さい時display: none -->
        <v-col cols="12" sm="12" md="2">
              <SideMenu class="mt-10 mb-10" />
          </v-col>

          <v-col cols="12" sm="8" md="9" class="mx-auto">
                <v-container fluid>
                  <v-row>
                    <v-col
                      v-for="n in 9"
                      :key="n"
                      cols="8"
                      sm="6"
                      md="4"
                      class="sp-display"
                    >
                      <v-card
                        color="grey lighten-5"
                        max-width="300px"
                        >
                        <v-container fluid>
                          <v-row no-gutters>
                              <v-col cols="6" class="mx-auto">
                                <v-responsive :aspect-ratio="16/9">
                                  <v-img
                                    :src="required_image"
                                  >
                                  </v-img>
                                </v-responsive>
                              </v-col>
                            <v-col cols="12">
                              <v-card-title>
                                Webを支える技術
                              </v-card-title>
                              <v-card-subtitle>
                                山本陽平(著)
                              </v-card-subtitle>

                              <v-divider class="mb-4"></v-divider>
                            </v-col>
                                <v-col cols="3">
                                <v-avatar
                                  color="primary"
                                  size="40"
                                >
                                </v-avatar>
                                <p class="user-name">@username</p>
                                </v-col>

                                <v-col cols="9">
                                  <v-card-text class="comment font-weight-medium">
                                    おもしろい。おもしろい。おもしろいおもしろい。おもしろい。おもしろいおもしろい。
                                    <nuxt-link to="/books/1">続きを読む</nuxt-link>
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
            :length="4"
            circle
          ></v-pagination>
        </v-col>
      </v-row>


    </v-container>
</template>

<script>
export default {
  components: {
    SideMenu: () => import("~/components/base/SideMenu"),
  },
  data(){
    return{
      page: 1,
      required_image: require('@/static/book.png')
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
