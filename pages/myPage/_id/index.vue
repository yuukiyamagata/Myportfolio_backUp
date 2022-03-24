<template>
  <div class="mx-auto">
    <v-container fluid class="px-12">
      <v-row>
        <v-col cols="6">
          <v-row d-flex>
            <v-col cols="4">
              <v-avatar
                color="primary"
                size="100"
              >
              </v-avatar>
              <p class="pt-4">#userId{{ $route.params.id }}番のUserName</p>
            </v-col>
            <v-col cols="6">
              <p>ここに自己紹介がはいる</p>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" class="text-right">
          <v-btn color="indigo" :to="{path: `/mypage/${$route.params.id}/edit`}" outlined>編集</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-divider ></v-divider>
    <v-tabs>
      <v-tab>お気に入りした参考書</v-tab>
      <v-tab>いいね</v-tab>
      <v-tab>フォロー</v-tab>
      <v-tab>フォロワー</v-tab>
  </v-tabs>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>

</style>