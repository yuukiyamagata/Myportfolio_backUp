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
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-card
                        color="grey lighten-5"
                        width="280"
                        height="300"
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
                          </v-row>
                          <v-row>
                            <v-col cols="12">

                              <v-row no-gutters>
                                <v-col cols="3">
                                <v-avatar
                                  color="primary"
                                  size="50"
                                >
                                </v-avatar>
                                <p class="name-text">@username</p>
                                </v-col>

                                <v-col cols="9" class="bg-blue">
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
