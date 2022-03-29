<template>
  <v-row class="white mx-auto d-flex flex-column max-width">
    <v-col cols="12" sm="12" class="mb-4">
      <p class="text-h4  text-center mt-4">参考書の投稿</p>
    </v-col>
    <v-col >
      <v-form ref="form" v-model="valid">
        <v-row>
          <v-col class="form-width" cols="12" sm="12">
          <v-row>
            <v-col cols="10">
              <v-text-field
                v-model="searchWord"
                label="参考書の検索"
                placeholder="検索ワードを入力してください"
                dense
                append-icon="mdi-magnify"
              >
              </v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
              <v-btn color="teal" outlined @click="search">検索</v-btn>
            </v-col>
          </v-row>
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
            <div class="mb-6 pt-4">
              <v-img
                :src="image_src_noImage"
                class="mx-auto displayImage"
              >
              </v-img>
            </div>
            <div class="btn-wrapper pt-8">
              <v-row class="d-flex flex-row-reverse">
                <v-btn color="indigo" outlined class="ml-4"  @click="saveBookData" >投稿</v-btn>
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



    <v-card>
        <v-card-title>お勧めする参考書を選択してください</v-card-title>
        <v-divider></v-divider>
        <v-card-text>

          <v-container>
          <v-row justify="center" align="center">
            <v-col
              v-for="result in serachResults"
              :key="result.id"
              cols="12">
                  <v-card
                    class="mx-auto"
                    max-width="280"
                    align="center"
                    >
                  <div class="bg-color">
                      <v-img
                        :src="result.imageUrl"
                        class="img-fit"
                        />
                  </div>
                  <v-card-title>
                      {{ result.title }}
                      <div class="text-subtitle-1">著者:{{ result.author }}</div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn
                        color="orange lighten-2"
                        text
                        @click="selectBook(result)"
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
                @click="closeDialoag"
                >
                Close
              </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
import axios from 'axios'
import { collection, setDoc, doc } from 'firebase/firestore'
import { db } from '@/plugins/firebase.js'
export default {
  data(){
    return {
      searchWord: '',
      serachResults:[],
      image_src_noImage: require('@/static/NoImage.png'),
      valid: false,
      // データベースに登録
      sankousho:{
        title: '',
        category: '',
        reason: '',
        author: '',
        imageUrl: '',
        itemUrl: '',
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
        // 書籍限定
        + "&applicationId=" + appId
        + "&page=1"
        + "&outOfStockFlag=1"
        + "&formatVersion=1"
        // jsonで返ってくる
        try{
          const response = await axios.get(requestURL).then(response => response.data);
            this.dialog = true;
            let id = 0;
            response.Items.forEach(book => {
              const title = book.Item.title
              const author = book.Item.author
              const publisherName = book.Item.publisherName
              const imageUrl = book.Item.largeImageUrl
              const itemUrl = book.Item.itemUrl

              this.serachResults.push({
                id,
                title,
                author: author ? author: publisherName, // eslint-disable-line
                imageUrl,
                itemUrl,
              })
              id++
            })

          if(response === undefined){
            throw new "データの取得に失敗しました"
          }
          }catch( error ){
            alert(error);
          }
    },
    selectBook( item ){
      this.sankousho.title = item.title
      this.sankousho.author = item.author
      this.sankousho.imageUrl = item.imageUrl ? item.imageUrl : this.image_src_noImage // eslint-disable-line
      this.image_src_noImage = this.sankousho.imageUrl
      this.sankousho.itemUrl = item.itemUrl

      this.dialog = false
      this.serachResults = [];
    },
    closeDialoag(){
      this.dialog = false
      this.serachResults = []
    },
    async saveBookData(){
      const message = 'この内容で登録してもよろしいでしょうか?'
      const result = window.confirm(message);
      if(!result) return // eslint-disable-line
        try {
          const postRef = doc(collection(db, "post_recommendations"))
          const bookData = {
            title: this.sankousho.title,
            image_url: this.sankousho.imageUrl,
            post_id: postRef.id,
            post_category: this.sankousho.category,
            post_url:this.sankousho.itemUrl,
            reason: this.sankousho.reason,
            author: this.sankousho.author
          }
          await setDoc(postRef, bookData)
        }catch( error ){
          console.error ( error )
        }
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

  .bg-color{
    background-color: #ECEFF1;
  }

  .img-fit {
    object-fit: cover;
    height: 200px;
    width: 140px;
    background-color: teal;
  }

.displayImage{
  object-fit: cover;
  width: 200px;
  height: 270px;
  border: 1px solid black;
}
</style>



