<template>
  <v-row class="white mx-auto d-flex flex-column max-width">
    <v-col cols="12" sm="12" class="mb-4">
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
              :rules="authorOrPublisherNameRules"
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
            <div class="iamge-wrapper mb-6">
              <v-img
                :src="image_src_noImage"
                width="270"
                height="300"
                style="border: 1px solid black;"
                class="mx-auto"
              >
              </v-img>
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
      scrollable
      transition="dialog-top-transition"
      width="600px"
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
        <v-card-title>お勧めする参考書を選択してください</v-card-title>
        <v-divider></v-divider>
        <v-card-text>

          <v-container>
          <v-row justify="center" align="center">
            <v-col
              v-for="n in 9"
              :key="n"
              cols="12">
                  <v-card
                    class="mx-auto"
                    max-width="280"
                    align="center"
                    >
                  <div class="bg-color">
                      <v-img
                        :src="serachResults.imageUrl"
                        class="img-fit"
                        />
                  </div>
                  <v-card-title>
                      Top western road trips
                    </v-card-title>

                    <v-card-actions>
                      <v-btn
                        color="orange lighten-2"
                        text
                      >
                        選択
                      </v-btn>
                    </v-card-actions>
                  </v-card>

              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
            <v-card-actions>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
                >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="dialog = false"
                >
                Save
              </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <a href="https://developers.rakuten.com/" target="_blank">Supported by Rakuten Developers</a>
  </v-row>
</template>



<script>
import axios from 'axios'
export default {
  data(){
    return {
      searchWord: '英文解釈教室',
      // serachResults:[],
      image_src_noImage: require('@/static/noImage.png'),
      valid: false,
      sankousho:{
        title: '',
        category: '',
        reason: '',
        author: '',
      },
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
      authorOrPublisherNameRules: [(v) =>(v && v.length <= 20) || "必須項目です。また最大20文字です。"],
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
        serachResults:{
          books: [],
          keyword: '',
          imageUrl:'',
        }
    }
  },
  created(){
  },
  methods:{
    async search(){
      const baseUrl ='https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?';
      const appId = "1089430002983138325"
      const encodeString = encodeURI(this.searchWord);
      const requestURL = baseUrl
        + "&format=json"
        + "&title=" + encodeString
        + "&booksGenreId=001"
        + "&applicationId=" + appId
        + "&page=1"
        + "&outOfStockFlag=1"
        + "&formatVersion=1"
        const response = await axios.get(requestURL).then(response => console.log(response.data))
        console.log(response)
      // 必要な情報を配列に追加
    //     console.log(data.Items[0].Item.smallImageUrl)
    // this.imageUrl = data.Items[0].Item.largeImageUrl
    }
  }
};
</script>

<style>
  

  .max-width {
    width: 70%;
  }
  .form-width {
    width:80%;
    margin: 0 auto;
  }
  .iamge-wrapper{
    background-color: grey;
    padding-top: 8px;
  }
  .btn-wrapper{
  }
  .bg-color{
    background-color: #ECEFF1;
  }
  .img-fit {
  object-fit: cover;
  height: 200px;
  width: 140px;
  background-color: teal;
  }
</style>



