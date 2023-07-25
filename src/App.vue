<template>
  <div class="container"><Header /></div>
  <div class="container"><router-view /></div>
  <div class="container"><Footer /></div>
</template>

<script>
import dictionary from "@/data/dictionary.json";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { commonComputed } from "@/store/games/common";

export default {
  name: "App",
  components: { Footer, Header },
  beforeMount() {
    this.$store.dispatch("setDictionary", dictionary);
  },
  computed: {
    ...commonComputed,
  },
};
</script>

