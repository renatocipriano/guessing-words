<template>
  <!-- Header -->
  <div class="container"><Header /></div>

  <!-- Content -->
  <div class="container">
    <FormNewGameVue />
    <FormGuess v-show="game != null" />
    <TableGuess v-show="game != null" />
  </div>

  <!-- Footer -->
  <div class="container"><Footer /></div>
</template>

<script>
import dictionary from "@/data/dictionary.json";
import Footer from "./components/Footer.vue";
import FormGuess from "@/components/FormGuess.vue";
import FormNewGameVue from "@/components/FormNewGame.vue";
import Header from "./components/Header.vue";
import TableGuess from "./components/TableGuess.vue";
import { commonComputed } from "@/store/games/common";

export default {
  name: "App",
  components: {
    FormNewGameVue,
    FormGuess,
    TableGuess,
    Footer,
    Header,
  },
  beforeMount() {
    this.$store.dispatch("setDictionary", dictionary);
  },
  computed: {
    ...commonComputed,
  },
};
</script>

