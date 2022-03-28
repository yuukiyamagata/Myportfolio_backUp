<template>

  <v-row class="mx-auto d-flex flex-column bg-kohaku max-width">
    <v-col cols="12" sm="12" class="bg-blue mb-4">
      <p class="text-h4  text-center mt-4">参考書の投稿</p>
    </v-col>
    <v-col >
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col class="form-width" cols="12" sm="12">
            <v-text-field
              v-model="searchWord"
              label="参考書の検索"
              placeholder="検索ワードを入力してください"
              dense
              append-icon="mdi-magnify"
              @keydown.enter="search"
            >
            </v-text-field>
            <v-text-field
              v-model="sankousho.title"
              label="参考書タイトル"
              placeholder="(例) チャート式数学"
              :rules="titleRules"
            ></v-text-field>
            <v-text-field
              v-model="sankousho.author"
              label="著者・出版社"
              placeholder="(例) 数研出版"
              :rules="authorOrCompanyNameRules"
            ></v-text-field>
            <v-textarea
              v-model="sankousho.reason"
              label="参考書おすすめ理由"
              placeholder="(例) これを7周やったら偏差値15上がった!!"
              height="100"
              :rules="reasonRules"
            ></v-textarea>
            <v-select
              v-model="sankousho.category"
              :items="subject"
              label="カテゴリー"
              dense
              :rules="sankousyoCategoryRules"
            >
            </v-select>
            <div class="iamge-wrapper">
              <v-img>
              </v-img>
              <p>画像がここに入るよ</p>
            </div>
            <div class="btn-wrapper">
              <v-row class="d-flex flex-row-reverse">
                <v-btn color="indigo" outlined class="ml-4">投稿</v-btn>
                <v-btn outlined sm>プレビュー</v-btn>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-col>



<v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
          <v-btn
            dark
            color="primary"
            @click="dialog = false"
          >
            Save
          </v-btn>
      </v-card>
    </v-dialog>
  </v-row>

</template>







<script>
export default {
  data(){
    return {
      sankousyoCategory: "",
      serachWord: '',
      valid: false,
      sankousho:{
        title: '',
        category: '',
        reason: '',
        author: '',
      },
      searchWord: '',
    // バリデーションルール
      titleRules: [
        (v) => !!v || "必須項目です。",
        (v) => (v && v.length <= 40) || "最大40文字です。",
      ],
      reasonRules: [
        (v) => !!v || "必須項目です。",
        (v) => (v && v.length <= 300) || "最大300文字です。",
      ],
      sankousyoCategoryRules: [(v) => !!v || "必須項目です。"],
      authorOrCompanyNameRules: [(v) =>(v && v.length <= 20) || "必須項目です。また最大20文字です。"],
      subject:[
        '数学',
        '英語',
        '現代文,古文,漢文',
        '理科・化学',
        '理科・物理',
        '理科・生物',
        '理科・地学',
        '社会・日本史',
        '社会・世界史',
        '社会・地理',
        '社会・政治経済,倫理',
      ],
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
    }
  },
  created(){

  },
  methods:{
    search(){
      alert('search')
    }
  }
};
</script>

<style>
  .bg-kohaku {
    background-color: khaki;
  }
  .bg-blue{
    background-color: lightblue;
  }

  .max-width {
    width: 70%;
  }
  .form-width {
    width:80%;
    margin: 0 auto;
  }
  .iamge-wrapper{
    background-color: grey;
  }
  .btn-wrapper{
    background-color: blue;
  }
</style>



