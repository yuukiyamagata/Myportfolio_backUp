<template>
    <v-container class="mt-12 bg" fluid>
    <v-row no-gutters class="d-flex justify-space-between mb-10">
      <!-- サイズが小さい時display: none -->
        <v-col cols="12" sm="12" md="2">
              <SideMenu class="mt-10 mb-10" />
          </v-col>

          <v-col cols="12" sm="8" md="9" class="bg-main mx-sm-auto">
                <v-container fluid>
                  <v-row>
                    <v-col
                    v-for="n in 9"
                    :key="n"
                    cols="12"
                    sm="6"
                    md="4"
                    >
                      <v-card
                        color="grey lighten-5"
                        width="300"
                        height="270"
                        >
                        <v-container fluid>
                          <v-row no-gutters>
                            <v-col cols="5" class="mx-auto">
                                <v-responsive :aspect-ratio="16/9">
                                      <v-img
                                        :src="required_image"
                                      >
                                      </v-img>
                                </v-responsive>
                            </v-col>
                          </v-row>
                          <v-row no-gutters>
                            <v-col cols="12" class="d-flex">

                              <v-row>
                                <v-col cols="3" class="bg-yellow">
                                <v-avatar
                                  color="primary"
                                  size="56"
                                >
                                </v-avatar>
                                <p class="name-text">@username</p>
                                </v-col>

                                <v-col cols="9">
                                  <v-card-text class="text-size">
                                    おもしろい。おもしろい。おもしろいおもしろい。おもしろい。おもしろいおもしろい。
                                    </v-card-text>
                                </v-col>

                              </v-row>
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

.text-size {
  font-size: 12px;
  line-height: 1.2;
}
.bg {
  background-color: grey;
}

.name-text {
  display: inline-block;
  padding-top: 3px;
  font-weight: bold;
  font-size: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}



</style>
