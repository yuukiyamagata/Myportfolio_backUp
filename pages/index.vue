<template>
  <v-container>
    <v-row>
      <v-col cols="4">

      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-card-text>
          <div>参考書タイトル</div>
          <p class="text-h4 text--primary">
            参考書画像
          </p>
          <p>アイコン</p>
          <div class="text--primary">
            とてもすばらいい参考書です<br>
            英語の成績が上がりました。この...
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = true"
          >
            もっと読む
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
          >
            <v-card-text class="pb-0">
              <p class="text-h4 text--primary">
                Origin
              </p>
              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>

      </v-col>
      <v-col cols="4">
        <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-card-text>
          <div>参考書タイトル</div>
          <p class="text-h4 text--primary">
            参考書画像
          </p>
          <p>アイコン画像</p>
          <div class="text--primary">
            すごくわかりやすいです!<br>
            数学の..
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = true"
          >
            もっと読む
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%;"
          >
            <v-card-text class="pb-0">
              <p class="text-h4 text--primary">
                Origin
              </p>
              <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = false"
              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">

      </v-col>

    </v-row>
    <v-row>
      <v-col cols="3">

      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
    data: () => ({
    reveal: false,
  }),
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}


</style>