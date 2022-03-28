<template>
  <v-app dark>
    <Header />
      <v-main class="bg-color">
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
      <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/base/Header.vue';
import Footer from '@/components/base/Footer.vue';
export default {
  name: 'DefaultLayout',
  components:{
    Header,
    Footer,
  },
}
</script>

<style>

</style>