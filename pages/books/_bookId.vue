<template>
    <div class="book-page-width mx-auto">
      {{ $route.params.id }}
      <v-container fluid class="my-10">
        <v-row>
          <v-col cols="4">
            <v-row class="d-flex flex-column mb-6">
                <v-col cols="11" class="ml-auto">
                  <v-responsive
                  :aspect-ration=16/9
                  >
                    <v-img
                      :src="image_src"
                      flat
                      contain
                    >
                    </v-img>
                  </v-responsive>
                </v-col>
                <v-col cols="12">
                  <p class="text-center text-sm-h6 text-body-1 font-weight-bold">タイトル</p>
                  <p class="text-center text-body-2">著者名</p>
                </v-col>
                <v-divider class="mb-4"></v-divider>
                <v-col class="text-center">
                    <v-menu
                      open-on-hover
                      top
                      offset-y
                    >
                  <template #activator="{ on, attrs }">
                      <v-icon color="grey lighten-1" v-bind="attrs" v-on="on" size="30">
                        mdi-cart
                      </v-icon>
                      <span class="d-block">購入</span>
                  </template>

                  <v-list>
                      <v-list-item>
                        <v-list-item-title >
                          <nuxt-link to="/" class="link-border-line-none">
                          楽天サイトで見てみる
                          </nuxt-link>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
            </v-row>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="7">
            <v-sheet elevation="1" tile>
              <v-card elevation="0">
                <v-card-title class='text-h6 font-weight-black'>Comment</v-card-title>
                    <v-sheet
                    elevation="0"
                    class="mx-auto"
                    >
                    <v-list-item three-line>
                        <v-list-item-avatar
                          size="56"
                          color="primary"
                        ></v-list-item-avatar>

                        <v-list-item-content>
                          <div class="text-overline mb-4">
                            @username
                          </div>
                        </v-list-item-content>
                      </v-list-item>

                    <v-card-text>
                      Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim. Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem. Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        text
                        color="indigo accent-4"
                        class="mb-4"
                      >
                        一覧へ戻る
                      </v-btn>

                        <v-btn
                          class="mx-2"
                          fab
                          dark
                          color="indigo"
                          absolute
                          right
                          small
                          @click="confirm"
                          >
                            <v-icon dark size="20" >
                              mdi-plus
                            </v-icon>
                          </v-btn>
                    </v-card-actions>
                    </v-sheet>
              </v-card>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </div>

</template>

<script>
export default {
  data(){
    return{
      image_src: require("@/static/book.png"),
    }
  },
  methods:{
    confirm(){
      const result = window.confirm('お気に入りに登録しますか?')
      if(!result) return // eslint-disable-line
    }
  }
}
</script>

<style scoped lang="scss">

.book-page-width {
  max-width: 900px;
}

</style>



