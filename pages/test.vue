<template>
 <v-container>
        <v-row>
          <v-col
            v-for="n in 9"
            :key="n"
            cols="4"
          >
            <v-card
            color="grey lighten-5"
            height="280"
            width="300"
            tile></v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>