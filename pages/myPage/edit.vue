<template>
  <v-container mx-auto>
    <v-row >
      <v-col cols="3">
        <v-avatar
          color="primary"
          size="100"
        >
        </v-avatar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-text-field
          label=""
          placeholder="ユーザーネーム"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
          <v-textarea
          outlined
          name="input-7-4"
          label="About me"
          value="私は〇〇です"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="5">
        <v-text-field
          label="Twitter URl"
          placeholder="Twitter URl"
          outlined
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-btn color="primary">保存</v-btn>
        <v-btn color="red">リセット</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'componentLess'
}
</script>

<style>



</style>