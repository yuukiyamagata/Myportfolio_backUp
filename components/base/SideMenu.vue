<template>
    <v-sheet rounded="lg">
        <v-list color="transparent" nav>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title my-4" color="grey lighten-4">
                カテゴリー検索
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item
            v-for="subject in subjects"
            :key="subject"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ subject }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>


        </v-list>
    </v-sheet>
</template>

<script>
export default {
  data(){
    return {
      subjects:[
        '数学',
        '英語',
        '理科',
        '社会',
        '現代文・古文・漢文'
      ]
    }
  }
}
</script>