<template>
  <div class="fix-width mt-12">

    <v-row no-gutters class="d-flex justify-space-around mb-10">
      <!-- サイズが小さい時display: none -->
        <v-col cols="12" sm="12" md="2" class="d-flex flex-column justify-between-around">
              <SideMenu class="mt-10 mb-10" />
              <div class="sideContents">サイドコンテンツが入ります</div>
          </v-col>

          <v-col cols="12" sm="8" md="9" class="bg-main">
                <v-container>
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
                        width="270"
                        height="300"
                        >
                        <v-responsive :aspect-ratio="16/9">
                          <v-card-text>
                          </v-card-text>
                        </v-responsive>
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

  </div>
</template>

<script>
export default {
  components: {
    SideMenu: () => import("~/components/base/SideMenu"),
  },
  data(){
    return{
      page: 1,
    }
  }

}
</script>

<style scoped>


.bg-main {
  background-color: grey;
}

.sideContents {
  width: 200px;
  height: 200px;
  background-color: black;
}


</style>>

</style>