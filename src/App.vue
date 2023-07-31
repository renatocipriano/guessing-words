<template>
  <div class="container"><Header /></div>
  <div class="container"><router-view /></div>
  <div class="container"><Footer /></div>
</template>

<script>
import dictionary from "@/data/dictionary-ptbr.json";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { commonComputed } from "@/store/games/common";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "App",
  setup() {
    const route = useRoute();
    watchEffect(() => {
      document.title = route.meta.title || "Guessing Words";
    });
  },
  components: { Footer, Header },
  beforeMount() {
    if (this.$store.getters.getDictionary.length == 0) {
      this.$store.dispatch("setDictionary", dictionary);
    }
  },
  computed: {
    ...commonComputed,
  },
};
</script>

