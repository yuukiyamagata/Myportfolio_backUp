<template>
    <div class="book-page-width">
      <v-container fluid>
        <v-row>
          
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
  }
}
</script>

<style scoped lang="scss">

.book-page-width {
  max-width: 900px;
}




    // <v-img
    //               :src="image_src"
    //               flat
    //               aspect-ratio="16/9"
    //               min-height="300"
    //               max-height="360"
    //               class="white"
    //               contain
    //             />


.user-info {
  /* background-color: blue; */
  padding: 50px;
  display: flex;
}

.user-info-name {
  margin-left: 20px;
  align-self: center;
}

.comment-area {
  max-width: 350px;
  min-height: 300px;
  border: 1px solid white;

  p{
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
}

.book-title p{
  display: inline-block;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(226, 216, 216);
}

.link {
  color: rgba(226, 24, 74, 0.904);
  text-decoration: none;
}

</style>







// <v-row fluid class="mt-10 mx-auto d-flex">
//       <v-col cols="6">
//         <div class="d-flex flex-column">
//           <div class="img-content">
//           </div>
//             <div class="subtitle-1 text-center pt-4 book-title">
//               <p>#{{ $route.params.bookId }}番目の本のタイトル</p>
//             </div>
//           <div class="text-center mt-3">
//             <nuxt-link to="/" class="link">
//               商品購入はこちらから
//             </nuxt-link>
//         </div>
//       </div>
//     </v-col>

//   <v-divider vertical></v-divider>

//       <v-col cols="5">
//         <div class="user-info">
//         <div class="user-info-avatar">
//           <v-avatar
//           color="grey darken-1"
//           size="62"
//           >
//             <v-icon dark size="70">
//             mdi-account-circle
//             </v-icon>
//           </v-avatar>
//         </div>
//         <div class="user-info-name">
//           <p class="text--gray">UserName</p>
//         </div>
//       </div>

//       <div class="comment-area">
//           <h3>コメント</h3>
//           <p>あああああああああああああああああああああああああああ
//             ああああああああああああああああああああああああああああ
//           </p>
//       </div>

//       <div class="btn--group">
//         <v-btn
//           class="mx-2"
//           fab
//           dark
//           small
//           color="pink"
//         >
//         <v-icon>mdi-heart</v-icon>
//         </v-btn>

//         <v-btn
//         class="ma-2"
//         text
//         icon
//         color="blue lighten-2"
//         >
//           <v-icon>mdi-thumb-up</v-icon>
//         </v-btn>
//       </div>


//     </v-col>
//   </v-row>
